'use strict';

import cors from 'cors';
import express from 'express';
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
  ormErrorHandler,
} from './middlewares/error.handler.js';
import routerApi from './routes/index.js';
import './utils/auth/index.js';

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

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
