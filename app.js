const express = require('express');
const morgan = require('morgan');
require('express-async-errors');
require('dotenv').config();
require('./db');
const userRouter = require('./routes/user');
const { errorHandler } = require('./middleware/error');
const cors = require('cors');
const { handleNotFound } = require('./utils/helper');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/user', userRouter);

app.use('/*', handleNotFound);

app.use(errorHandler);

// app.post(
//   '/sign-in',
//   (req, res, next) => {
//     const { email, password } = req.body;
//     if (!email || !password)
//       return res.json({ error: 'email or password are missing!' });
//     next();
//   },
//   (req, res) => {
//     res.send('<h1>Hello I am from</h1>');
//   }
// );

app.listen(8000, () => {
  console.log('the port is listening on port 8000');
});
