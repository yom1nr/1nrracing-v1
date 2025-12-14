import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import auth from './auth.js'; // ต้องมี .js ต่อท้าย
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173']
}));
app.get('/health', (_, res) => res.json({ ok: true }));
app.use('/auth', auth);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
});
