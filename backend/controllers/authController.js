const bcrypt = require('bcrypt');
const pool = require('../routes/db'); // Ensure correct path

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);

  try {
    const { rows } = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, hashedPassword]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Server error during user registration.' });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = rows[0];

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Generate and send token (not implemented)
    res.status(200).json({ message: 'User logged in successfully.' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error during user login.' });
  }
};


// Add createNote, updateNote, and deleteNote implementations
