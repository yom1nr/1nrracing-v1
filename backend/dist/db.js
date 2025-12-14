import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, '..', 'db.json');
if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify({ users: [] }, null, 2));
}
const adapter = new JSONFile(file);
export const db = new Low(adapter, { users: [] });
export async function initDB() {
    await db.read();
    db.data ||= { users: [] };
    await db.write();
}
