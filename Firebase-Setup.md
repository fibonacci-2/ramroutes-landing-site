# Firebase Firestore Setup Guide

This project uses Firebase Firestore for persistent data storage in a client-side React application.

## Important Note About Client-Side vs Server-Side

**Client-Side Firebase (Current Setup):**
- This React application runs in the browser and uses client-side Firebase SDK
- Uses regular Firebase configuration (apiKey, authDomain, etc.)
- Data access is controlled by Firestore Security Rules
- Service accounts are NOT used in client-side applications

**Server-Side Firebase (Future Enhancement):**
- Would require a backend server (Node.js, Cloud Functions, etc.)
- Could use service accounts for admin operations
- The `serviceAccountKey.json` file is included for future server-side integration

## Current Setup Instructions

### 1. Firebase Project Configuration

1. Go to your [Firebase Console](https://console.firebase.google.com/)
2. Select your project (`trials-of-venus`)
3. Click on the gear icon ⚙️ next to "Project Overview"
4. Go to "Project settings" → "General" tab
5. Scroll down to "Your apps" section
6. Add or find your web app configuration
7. Copy the configuration values and update `src/config/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "trials-of-venus.firebaseapp.com", 
  projectId: "trials-of-venus",
  storageBucket: "trials-of-venus.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 2. Firestore Database Setup

1. In Firebase Console, go to "Firestore Database"
2. Create the following collections (they will be created automatically when first used):
   - `androidRequests` - For Android app access requests
   - `teamApplications` - For team join applications

### 3. Security Rules

Set up Firestore security rules to protect your data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to androidRequests and teamApplications
    match /{collection}/{document} {
      allow read, write: if collection in ['androidRequests', 'teamApplications'];
    }
  }
}
```

### 4. Environment Variables (Optional)

For additional security, you can move sensitive configuration to environment variables:

Create a `.env.local` file:
```
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=ramroutes-landing.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=ramroutes-landing
```

## Features

### Single Storage System
- **Primary**: Firestore Cloud Database (persistent, reliable, cloud-based)

### Admin Panel Features
- View all Firestore data
- Mark requests as processed/unprocessed
- Export email lists
- Delete individual requests
- Password protection

### Data Types Stored

#### Android Requests (`androidRequests` collection)
```javascript
{
  name: string,
  email: string,
  subject: string,
  message: string,
  timestamp: Firestore Timestamp,
  processed: boolean,
  type: "android"
}
```

#### Team Applications (`teamApplications` collection)  
```javascript
{
  name: string,
  email: string,
  role: string,
  message: string,
  timestamp: Firestore Timestamp,
  processed: boolean,
  type: "team"
}
```

## Usage

### Client-Side Form Submission
Forms automatically:
1. Save to Firestore (primary)
2. Send email via Web3Forms
3. Show success/error messages to users

### Admin Panel Access
1. Click the "Admin" button (bottom-right corner)
2. Enter password: `ramroutes2025`
3. View and manage all requests

### Service Classes
The application includes service classes for easy data management:

```javascript
import { androidRequestsService, teamApplicationsService } from './config/firestoreService';

// Add new request
const docId = await androidRequestsService.add(requestData);

// Get all requests
const requests = await androidRequestsService.getAll();

// Mark as processed
await androidRequestsService.markProcessed(docId, true);
```

## Troubleshooting

### Service Account Issues
- Ensure the service account JSON is properly formatted
- Check that the service account has Firestore permissions
- Verify the project ID matches your Firebase project

### Connection Issues
- Check Firebase console for project status
- Verify Firestore security rules allow your operations
- Check browser console for detailed error messages

### Data Not Syncing
- Admin panel has a "Refresh" button to reload data
- Check the Firestore admin panel for submitted data
- Verify forms are submitting successfully (check browser network tab)

## File Structure

```
src/
├── config/
│   ├── firebase.js              # Main Firebase configuration
│   ├── firestoreService.js      # Service classes for database operations
│   └── serviceAccountKey.json   # Service account credentials (add your own)
├── components/
│   ├── AndroidForm.js           # Android access request form
│   └── AdminRequests.js         # Admin panel component
└── policy/
    └── who-we-are.js           # Team application form
```

## Security Notes

- Never commit `serviceAccountKey.json` to version control
- Use environment variables in production
- Implement proper Firestore security rules
- The admin password should be changed for production use
- Consider implementing proper authentication for the admin panel

## Support

For issues with this setup:
1. Check the browser console for errors
2. Verify Firebase project configuration
3. Ensure service account has proper permissions
4. Contact the development team
