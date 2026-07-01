const fs = require('fs');
const env = fs.readFileSync('.env', 'utf-8');
const url = env.match(/SUPABASE_URL="([^"]+)"/)[1];
const key = env.match(/SUPABASE_SERVICE_ROLE_KEY="([^"]+)"/)[1];
const pubKey = env.match(/SUPABASE_PUBLISHABLE_KEY="([^"]+)"/)[1];

const { createClient } = require('@supabase/supabase-js');
const supabaseAdmin = createClient(url, key, { auth: { persistSession: false } });
const supabaseClient = createClient(url, pubKey, { auth: { persistSession: false } });

async function run() {
  const email = 'test' + Date.now() + '@example.com';
  const password = 'testpassword123';
  
  console.log('Creating user...');
  const createRes = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true
  });
  
  if (createRes.error) {
    console.log('Create Error:', createRes.error);
    return;
  }
  console.log('Created user:', createRes.data.user.id);
  
  console.log('Signing in...');
  const signinRes = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });
  
  if (signinRes.error) {
    console.log('Signin Error:', signinRes.error.message);
  } else {
    console.log('Signin Success:', signinRes.data.user.id);
  }
}

run();
