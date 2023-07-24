//Create web server
const express = require('express');
const app = express();
const port = 3000;
//Create database connection
const db = require('./db');
//Create router
const commentsRouter = require('./routes/comments');
//Create middleware
const bodyParser = require('body-parser');
const cors = require('cors');
//Set middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
//Set router
app.use('/comments', commentsRouter);
//Start server
app.listen(port, () => console.log(`Server started on port ${port}`));