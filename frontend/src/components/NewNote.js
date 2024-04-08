import React, { useState } from 'react';
import axios from 'axios';

function NewNote() {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/notes', note);
      // Handle success (e.g., redirect to notes list)
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={note.title} onChange={handleChange} placeholder="Title" />
      <textarea name="content" value={note.content} onChange={handleChange} placeholder="Content"></textarea>
      <button type="submit">Create Note</button>
    </form>
  );
}

export default NewNote;
