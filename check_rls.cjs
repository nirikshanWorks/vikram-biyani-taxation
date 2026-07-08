const { Client } = require('pg');

async function checkRLS() {
  const client = new Client({
    connectionString: "postgresql://postgres.zwucxintcdebmswwyphi:Vikram%249690%23@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres"
  });

  try {
    await client.connect();
    
    // Check policies on orders table
    const res = await client.query(`
      SELECT polname, polcmd, polroles, polqual, polwithcheck 
      FROM pg_policy 
      WHERE polrelid = 'orders'::regclass;
    `);
    
    console.log("Orders Policies:", res.rows);

    // Check policies on enrollments table
    const res2 = await client.query(`
      SELECT polname, polcmd, polroles, polqual, polwithcheck 
      FROM pg_policy 
      WHERE polrelid = 'enrollments'::regclass;
    `);
    
    console.log("Enrollments Policies:", res2.rows);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
  }
}

checkRLS();
