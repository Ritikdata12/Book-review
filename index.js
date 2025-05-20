const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require("./config/db")
require('dotenv').config();


const authRoutes = require("./routes/authRoutes")
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);

connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));