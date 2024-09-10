// app.js
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3000;

// Cấu hình kết nối MongoDB
const url = 'mongodb://127.0.0.1:27017/Demo'; // Thay đổi nếu cần

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const con = mongoose.connection;

con.on('connected', () => {
  console.log('Connected to MongoDB...');
});

con.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Middleware
app.use(express.json()); // Để parse JSON body
app.use('/api', bookRoutes); // Đăng ký các route cho user


// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
