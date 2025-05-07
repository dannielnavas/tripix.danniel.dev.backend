'use strict';

const express = require('express');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');
const { checkApiKey } = require('./middlewares/auth.handler');

const cors = require('cors');

const app = express();

app.use(express.json()); // implementar para los post
const whitelist = ['http://localhost:3000', 'https://myapp.co', '*'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors());
require('./utils/auth');

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
