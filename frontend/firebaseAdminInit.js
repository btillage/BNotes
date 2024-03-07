const admin = require('firebase-admin');

// Replace 'path/to/serviceAccountKey.json' with the actual path to your downloaded service account key JSON file
const serviceAccount = require('./noteapp-416305-firebase-adminsdk-w30oc-1d439ea687.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { admin, db };
