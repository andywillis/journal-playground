import fs from 'fs';
import path, { dirname } from 'path';
import https from 'https';
import http from 'http';
import express from 'express';
import { fileURLToPath } from 'url';
import DraftLog from 'draftlog';

import 'dotenv/config';

import blog from './data/blog.json' assert { type: 'json' };

DraftLog(console);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(express.json());

const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/blog', (req, res) => {
  res.send(blog);
});

app.get('/', (req, res) => {
  res.json({ status: 'success' });
});
