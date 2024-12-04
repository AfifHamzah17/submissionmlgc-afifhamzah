const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  const db = new Firestore({
    projectId: 'submission-afifhamzah',
    databaseId: 'hamafi-db'
  });

  const predictCollection = db.collection('predictions');

  try {
    await predictCollection.doc(id).set(data);
    console.log('Document successfully written!');
  } catch (error) {
    console.error('Error writing document:', error);
    throw error;
  }
}

module.exports = storeData;