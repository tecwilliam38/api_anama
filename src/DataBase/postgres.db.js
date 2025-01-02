import pg from 'pg'
const { Pool } = pg;
// Dados novo banco supabase
// qTBe8bXkmtVpEo2L password
//  URL https://kpcanhcozznqvfibklhd.supabase.co
// JWT xFW6e3bktVP5k4Lr+5BmqKyHdWjWyDugRBk4uFnhO8FaK6tffi4TZ9wuujMIEvlNGbTa0DB+IrQ8crJ0EW8vPA==
// ID kpcanhcozznqvfibklhd

const pool = new Pool({    
    user: 'postgres.kpcanhcozznqvfibklhd',
    host: 'aws-0-sa-east-1.pooler.supabase.com',
    database: 'postgres',
    // pool_mode:'session',    
    password: 'qTBe8bXkmtVpEo2L',
    port: 6543,
});


export default pool;
