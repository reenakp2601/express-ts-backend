import { Request, Response } from 'express';
import fs from 'fs';

const DB_FILE = './src/db.json';

interface Submission {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}

export const ping = (req: Request, res: Response): void => {
    res.json(true);
};

export const addSubmission = (req: Request, res: Response): void => {
    const submission: Submission = req.body;
    const db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    db.submissions.push(submission);
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    res.status(201).send('Submission saved');
};

export const getSubmission = (req: Request, res: Response): void => {
    const index = parseInt(req.query.index as string);
    const db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    if (index >= 0 && index < db.submissions.length) {
        res.json(db.submissions[index]);
    } else {
        res.status(404).send('Submission not found');
    }
};
