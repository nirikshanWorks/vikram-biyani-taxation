const fs = require('fs');
const env = fs.readFileSync('.env', 'utf-8');
const urlMatch = env.match(/SUPABASE_URL="([^"]+)"/);
const keyMatch = env.match(/SUPABASE_SERVICE_ROLE_KEY="([^"]+)"/);
const url = urlMatch ? urlMatch[1] : '';
const key = keyMatch ? keyMatch[1] : '';

const { createClient } = require('@supabase/supabase-js');
const supabaseAdmin = createClient(url, key, { auth: { persistSession: false } });

async function checkUsers() {
  const { data, error } = await supabaseAdmin.auth.admin.listUsers();
  if (error) {
    console.error('Error listing users:', error);
  } else {
    console.log(`Total users: ${data.users.length}`);
  }
}
checkUsers();
