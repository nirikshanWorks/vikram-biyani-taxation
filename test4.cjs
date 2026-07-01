const http = require('http');

const data = JSON.stringify({
  email: 'workwithaayush7@gmail.com',
  otp: '123456',
  expiry: (Date.now() + 10000).toString(),
  signature: 'dummy' // Wait, I need a valid signature to bypass OTP check
});

// Calculate valid signature
const crypto = require('crypto');
const SERVER_SECRET = process.env.OTP_SECRET_SALT || "vbtc-taxation-otp-secret-salt-2026";
const expiry = (Date.now() + 100000).toString();
const otp = '123456';
const signature = crypto
  .createHmac("sha256", SERVER_SECRET)
  .update(`workwithaayush7@gmail.com:${otp}:${expiry}`)
  .digest("hex");

const reqData = JSON.stringify({
  email: 'workwithaayush7@gmail.com',
  otp,
  expiry,
  signature
});

const options = {
  hostname: 'localhost',
  port: 5173,
  path: '/api/verify-otp',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': reqData.length
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(reqData);
req.end();
