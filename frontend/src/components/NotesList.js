import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/notes');
        setNotes(data);
      } catch (error) {
        console.error(error);
        // Handle errors
      }
    };

    fetchNotes();
  }, []);

  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}

export default NotesList;
