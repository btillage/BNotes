// Similar structure to Register.js but posting to '/api/auth/login'
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [userData, setUserData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/login', userData);
      // Redirect or show success message
    } catch (error) {
      console.error(error);
      // Handle errors (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
