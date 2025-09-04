import { collection, addDoc, serverTimestamp, query, orderBy, getDocs, where } from 'firebase/firestore'
import { db } from './firebase'

// Service for handling contact form submissions
export const contactFormService = {
  // Add a new contact form submission
  async add(formData) {
    try {
      const docRef = await addDoc(collection(db, 'contact-forms'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'unread',
        source: formData.source || 'Contact Form'
      })
      return docRef.id
    } catch (error) {
      console.error('Error adding contact form:', error)
      throw error
    }
  },

  // Get all contact form submissions (admin use)
  async getAll() {
    try {
      const q = query(collection(db, 'contact-forms'), orderBy('timestamp', 'desc'))
      const querySnapshot = await getDocs(q)
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      console.error('Error fetching contact forms:', error)
      throw error
    }
  },

  // Get unread contact form submissions (admin use)
  async getUnread() {
    try {
      const q = query(
        collection(db, 'contact-forms'), 
        where('status', '==', 'unread'),
        orderBy('timestamp', 'desc')
      )
      const querySnapshot = await getDocs(q)
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      console.error('Error fetching unread contact forms:', error)
      throw error
    }
  }
}

// Service for handling android access requests
export const androidRequestService = {
  // Add a new android access request
  async add(requestData) {
    try {
      const docRef = await addDoc(collection(db, 'android-requests'), {
        ...requestData,
        timestamp: serverTimestamp(),
        status: 'pending',
        processed: false
      })
      return docRef.id
    } catch (error) {
      console.error('Error adding android request:', error)
      throw error
    }
  },

  // Get all android requests (admin use)
  async getAll() {
    try {
      const q = query(collection(db, 'android-requests'), orderBy('timestamp', 'desc'))
      const querySnapshot = await getDocs(q)
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (error) {
      console.error('Error fetching android requests:', error)
      throw error
    }
  }
}

export default { contactFormService, androidRequestService }
