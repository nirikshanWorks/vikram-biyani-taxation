const line = 'SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\r';
const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
if (match) {
  const key = match[1];
  let value = match[2] || '';
  console.log('Value before slice:', JSON.stringify(value));
  if (value.startsWith('"') && value.endsWith('"')) {
    value = value.slice(1, -1);
  }
  console.log('Value after slice:', JSON.stringify(value));
}
