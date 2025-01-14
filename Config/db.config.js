import { createPool } from 'mysql2';

const db = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pos',
});

export default db;