const fs = require('fs');
const env = fs.readFileSync('.env', 'utf-8');
const urlMatch = env.match(/SUPABASE_URL="([^"]+)"/);
const keyMatch = env.match(/SUPABASE_SERVICE_ROLE_KEY="([^"]+)"/);
const url = urlMatch ? urlMatch[1] : '';
const key = keyMatch ? keyMatch[1] : '';

const { createClient } = require('@supabase/supabase-js');
const supabaseAdmin = createClient(url, key, { auth: { persistSession: false } });

supabaseAdmin.auth.admin.createUser({
  email: 'test' + Date.now() + '@example.com',
  password: 'testpassword123',
  email_confirm: true
}).then(res => {
  console.log('Create result:', JSON.stringify(res, null, 2));
}).catch(err => {
  console.log('Error:', err);
});
