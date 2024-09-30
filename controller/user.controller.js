const {getConnection} = require("../initModel")
const bcrypt = require('bcrypt')
const db = getConnection()

exports.signUp = async (req, res) => {

    console.log(req.body)

    const { firstname, lastname, email, password } = req.body;
  
    // Validate incoming data (you can use more advanced validation like Joi or Yup)
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Check if the email already exists
      const [existingUser] = await db.execute(
        'SELECT id FROM users WHERE email = ?',
        [email]
      );
  
      if (existingUser.length > 0) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert the new user into the database
      const [result] = await db.execute(
        'INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)',
        [firstname, lastname, email, hashedPassword]
      );
  
      res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };

// Login controller
exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    // Validate incoming data
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      // Check if the user exists in the database
      const [existingUser] = await db.execute(
        'SELECT id, firstname, lastname, email, password FROM users WHERE email = ?',
        [email]
      );
  
      if (existingUser.length === 0) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const user = existingUser[0];
  
      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // If login is successful, return a response (can include JWT for authentication if needed)
      res.status(200).json({
        message: 'Login successful',
        user: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };

