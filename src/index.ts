import env from 'dotenv';
import * as app from './app';

env.config();

app.start();
