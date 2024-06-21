import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import { getSubmission, addSubmission, ping } from './routes';

const app = express();
const PORT = 3000;
const DB_FILE = './src/db.json';

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

app.get('/ping', ping);
app.post('/submit', addSubmission);
app.get('/read', getSubmission);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
