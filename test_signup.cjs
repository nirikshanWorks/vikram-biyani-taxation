const fs = require('fs');
const env = fs.readFileSync('.env', 'utf-8');
const urlMatch = env.match(/SUPABASE_URL="([^"]+)"/);
const pubKeyMatch = env.match(/SUPABASE_PUBLISHABLE_KEY="([^"]+)"/);
const url = urlMatch ? urlMatch[1] : '';
const pubKey = pubKeyMatch ? pubKeyMatch[1] : '';

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(url, pubKey, { auth: { persistSession: false } });

async function run() {
  const email = 'real_test_email_' + Date.now() + '@gmail.com';
  const password = 'testpassword123';
  
  console.log('Signing up...');
  const res = await supabase.auth.signUp({
    email,
    password
  });
  
  if (res.error) {
    console.log('Error:', res.error.message);
  } else {
    console.log('Session exists:', !!res.data.session);
    console.log('User ID:', res.data.user.id);
  }
}
run();
