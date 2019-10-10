import express from 'express';
import bodyParser from 'body-parser';
import email from './handlers/email';
import log from '../utils/log';

const port = process.env.PORT || 3333;
const app = express();

const preStart = () => {
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
};

const injectHandler = () => {
  app.use('/', email);
};

export const start = () => {
  preStart();
  injectHandler();
  app.listen(port, () => {
    log.info(`Server is running on port ${port}`);
  });
};
