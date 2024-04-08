const db = require('../firebaseAdminInit'); // Ensure correct path

exports.getNotes = async (req, res) => {
  try {
    const notesSnapshot = await db.collection('notes').get();
    const notes = [];
    notesSnapshot.forEach(doc => {
      notes.push({ id: doc.id, ...doc.data() });
    });
    res.json(notes);
  } catch (error) {
    console.error('Error getting notes:', error);
    res.status(500).json({ message: 'Failed to retrieve notes.' });
  }
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const docRef = await db.collection('notes').add({ title, content });
    res.status(201).json({ message: `Note created with ID: ${docRef.id}` });
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ message: 'Failed to create note.' });
  }
};

exports.updateNote = async (req, res) => {
    const { id } = req.params; // Note ID from the URL
    const { title, content } = req.body; // Updated note data from request body

    try {
        const noteRef = db.collection('notes').doc(id);
        await noteRef.update({ title, content });
        res.json({ message: `Note with ID: ${id} updated successfully.` });
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({ message: 'Failed to update note.' });
    }
};

exports.deleteNote = async (req, res) => {
    const { id } = req.params; // Note ID from the URL

    try {
        await db.collection('notes').doc(id).delete();
        res.json({ message: `Note with ID: ${id} deleted successfully.` });
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ message: 'Failed to delete note.' });
    }
};

