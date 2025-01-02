import pg from 'pg'
const { Pool } = pg;

const pool = new Pool({
    host: 'aws-0-sa-east-1.pooler.supabase.com',
    database: 'postgres',
    port: 6543,
    user: 'postgres.wrdshpcgpztnicjdskyi',
    password: '8BmrFlSjViE4oS3Z',
});


export default pool;
