import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db, initDB } from './db.js';
const router = Router();
initDB();
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    await db.read();
    if (db.data?.users.find(u => u.email === email)) {
        return res.status(400).json({ error: 'User exists' });
    }
    const hashed = bcrypt.hashSync(password, 8);
    const newUser = {
        id: (db.data?.users.length ?? 0 + 1).toString(),
        name,
        email,
        passwordHash: hashed
    };
    db.data?.users.push(newUser);
    await db.write();
    res.json({ ok: true });
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    await db.read();
    const user = db.data?.users.find(u => u.email === email);
    if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, 'secret', { expiresIn: '1h' });
    res.json({ token });
});
export default router;
