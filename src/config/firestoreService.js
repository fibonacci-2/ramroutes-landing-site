// Firestore service utilities for client-side operations
import { db } from './firebase.js';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  where, 
  deleteDoc, 
  doc, 
  updateDoc,
  serverTimestamp,
  limit
} from 'firebase/firestore';

/**
 * Firestore service class for handling database operations
 */
export class FirestoreService {
  constructor() {
    this.db = db;
  }

  /**
   * Add a new document to a collection
   * @param {string} collectionName - Name of the collection
   * @param {object} data - Data to store
   * @param {boolean} isAdminMode - Whether to show admin messages
   * @returns {Promise<string>} Document ID
   */
  async addDocument(collectionName, data, isAdminMode = false) {
    try {
      const docData = {
        ...data,
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString()
      };
      
      const docRef = await addDoc(collection(this.db, collectionName), docData);
      if (isAdminMode) {
        console.log(`Document added to ${collectionName} with ID:`, docRef.id);
      }
      return docRef.id;
    } catch (error) {
      console.error(`Error adding document to ${collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Get all documents from a collection
   * @param {string} collectionName - Name of the collection
   * @param {number} maxResults - Maximum number of results to return
   * @param {boolean} isAdminMode - Whether to show admin messages
   * @returns {Promise<Array>} Array of documents
   */
  async getDocuments(collectionName, maxResults = 100, isAdminMode = false) {
    try {
      let q;
      
      // Try to order by timestamp first, fall back to createdAt if timestamp doesn't exist
      try {
        q = query(
          collection(this.db, collectionName), 
          orderBy('timestamp', 'desc')
        );
        
        if (maxResults) {
          q = query(q, limit(maxResults));
        }
      } catch (timestampError) {
        // If timestamp field doesn't exist, try without ordering or use createdAt
        console.warn(`Timestamp field may not exist in ${collectionName}, trying without ordering`);
        q = collection(this.db, collectionName);
        
        if (maxResults) {
          q = query(q, limit(maxResults));
        }
      }

      const querySnapshot = await getDocs(q);
      const documents = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        documents.push({
          id: doc.id,
          ...data,
          timestamp: data.timestamp?.toDate?.()?.toISOString() || data.timestamp || data.createdAt
        });
      });
      
      // Sort by timestamp/createdAt manually if ordering failed
      documents.sort((a, b) => {
        const timeA = new Date(a.timestamp || a.createdAt || 0);
        const timeB = new Date(b.timestamp || b.createdAt || 0);
        return timeB - timeA; // Descending order
      });
      
      if (isAdminMode) {
        console.log(`Retrieved ${documents.length} documents from ${collectionName}`);
        console.log('Sample document:', documents[0]);
      }
      return documents;
    } catch (error) {
      console.error(`Error getting documents from ${collectionName}:`, error);
      if (isAdminMode) {
        console.error('Full error details:', error);
      }
      throw error;
    }
  }

  /**
   * Update a document
   * @param {string} collectionName - Name of the collection
   * @param {string} docId - Document ID
   * @param {object} data - Data to update
   * @param {boolean} isAdminMode - Whether to show admin messages
   * @returns {Promise<void>}
   */
  async updateDocument(collectionName, docId, data, isAdminMode = false) {
    try {
      const docRef = doc(this.db, collectionName, docId);
      const updateData = {
        ...data,
        updatedAt: new Date().toISOString()
      };
      
      await updateDoc(docRef, updateData);
      if (isAdminMode) {
        console.log(`Document ${docId} updated in ${collectionName}`);
      }
    } catch (error) {
      console.error(`Error updating document ${docId} in ${collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Delete a document
   * @param {string} collectionName - Name of the collection
   * @param {string} docId - Document ID
   * @param {boolean} isAdminMode - Whether to show admin messages
   * @returns {Promise<void>}
   */
  async deleteDocument(collectionName, docId, isAdminMode = false) {
    try {
      await deleteDoc(doc(this.db, collectionName, docId));
      if (isAdminMode) {
        console.log(`Document ${docId} deleted from ${collectionName}`);
      }
    } catch (error) {
      console.error(`Error deleting document ${docId} from ${collectionName}:`, error);
      throw error;
    }
  }

  /**
   * Get documents by field value
   * @param {string} collectionName - Name of the collection
   * @param {string} field - Field name to query
   * @param {any} value - Value to match
   * @param {boolean} isAdminMode - Whether to show admin messages
   * @returns {Promise<Array>} Array of matching documents
   */
  async getDocumentsByField(collectionName, field, value, isAdminMode = false) {
    try {
      const q = query(
        collection(this.db, collectionName),
        where(field, '==', value),
        orderBy('timestamp', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const documents = [];
      
      querySnapshot.forEach((doc) => {
        documents.push({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate?.()?.toISOString() || doc.data().timestamp
        });
      });
      
      if (isAdminMode) {
        console.log(`Retrieved ${documents.length} documents from ${collectionName} where ${field} = ${value}`);
      }
      return documents;
    } catch (error) {
      console.error(`Error querying ${collectionName} by ${field}:`, error);
      throw error;
    }
  }

  /**
   * Mark a request as processed
   * @param {string} collectionName - Name of the collection
   * @param {string} docId - Document ID
   * @param {boolean} processed - Processed status
   * @param {boolean} isAdminMode - Whether to show admin messages
   * @returns {Promise<void>}
   */
  async markAsProcessed(collectionName, docId, processed = true, isAdminMode = false) {
    return this.updateDocument(collectionName, docId, { 
      processed,
      processedAt: processed ? new Date().toISOString() : null
    }, isAdminMode);
  }

  /**
   * Get statistics about collections
   * @returns {Promise<object>} Statistics object
   */
  async getStats() {
    try {
      const [androidRequests, teamApplications] = await Promise.all([
        this.getDocuments('android-requests'),
        this.getDocuments('contact-forms')
      ]);

      return {
        androidRequests: {
          total: androidRequests.length,
          processed: androidRequests.filter(req => req.processed).length,
          pending: androidRequests.filter(req => !req.processed).length
        },
        teamApplications: {
          total: teamApplications.length,
          processed: teamApplications.filter(req => req.processed).length,
          pending: teamApplications.filter(req => !req.processed).length
        },
        lastUpdated: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error getting stats:', error);
      return {
        androidRequests: { total: 0, processed: 0, pending: 0 },
        teamApplications: { total: 0, processed: 0, pending: 0 },
        lastUpdated: new Date().toISOString(),
        error: error.message
      };
    }
  }
}

// Export singleton instance
export const firestoreService = new FirestoreService();

// Export individual collections helpers
export const androidRequestsService = {
  add: (data, isAdminMode = false) => firestoreService.addDocument('android-requests', { ...data, type: 'android' }, isAdminMode),
  getAll: (isAdminMode = false) => firestoreService.getDocuments('android-requests', 100, isAdminMode),
  update: (id, data, isAdminMode = false) => firestoreService.updateDocument('android-requests', id, data, isAdminMode),
  delete: (id, isAdminMode = false) => firestoreService.deleteDocument('android-requests', id, isAdminMode),
  markProcessed: (id, processed, isAdminMode = false) => firestoreService.markAsProcessed('android-requests', id, processed, isAdminMode)
};

export const teamApplicationsService = {
  add: (data, isAdminMode = false) => firestoreService.addDocument('contact-forms', { ...data, type: 'team' }, isAdminMode),
  getAll: (isAdminMode = false) => firestoreService.getDocuments('contact-forms', 100, isAdminMode),
  update: (id, data, isAdminMode = false) => firestoreService.updateDocument('contact-forms', id, data, isAdminMode),
  delete: (id, isAdminMode = false) => firestoreService.deleteDocument('contact-forms', id, isAdminMode),
  markProcessed: (id, processed, isAdminMode = false) => firestoreService.markAsProcessed('contact-forms', id, processed, isAdminMode)
};

export const contactFormsService = {
  add: (data, isAdminMode = false) => firestoreService.addDocument('contact-forms', { ...data, type: 'contact' }, isAdminMode),
  getAll: (isAdminMode = false) => firestoreService.getDocuments('contact-forms', 100, isAdminMode),
  update: (id, data, isAdminMode = false) => firestoreService.updateDocument('contact-forms', id, data, isAdminMode),
  delete: (id, isAdminMode = false) => firestoreService.deleteDocument('contact-forms', id, isAdminMode),
  markProcessed: (id, processed, isAdminMode = false) => firestoreService.markAsProcessed('contact-forms', id, processed, isAdminMode)
};
