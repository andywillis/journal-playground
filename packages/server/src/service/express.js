import path from 'path';
import express from 'express';
// import https from 'https';
import http from 'http';
import compression from 'compression';

import rootname from '../../rootname';
// import serverOptions from './config/server';

const app = express();

app.use(express.static(path.join(rootname, '../client/dist')));
app.use(express.json());
app.use(compression());

const port = process.env.PORT || 4000;

const server = http.createServer(app);

export { app, port, server };