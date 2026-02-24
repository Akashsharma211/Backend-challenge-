const express = require('express');
const authRoutes = require('./routes/auth.routes');
const cookiParser = require('cookie-parser');
const postRoutes = require('./routes/post.routes');









const app = express();
app.use(express.json());
app.use(cookiParser());


app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;