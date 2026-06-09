import { createFileRoute } from "@tanstack/react-router";
import nodemailer from "nodemailer";
import crypto from "crypto";

const SERVER_SECRET = process.env.OTP_SECRET_SALT || "vbtc-taxation-otp-secret-salt-2026";

export const Route = createFileRoute("/api/send-otp")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { email } = (await request.json()) as { email?: string };

          if (!email || !email.includes("@")) {
            return new Response(JSON.stringify({ error: "Valid email address is required" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          // Generate 6-digit OTP code
          const otp = Math.floor(100000 + Math.random() * 900000).toString();
          console.log(`[TESTING] Generated OTP code for ${email}: ${otp}`);
          
          // OTP expires in 10 minutes
          const expiry = Date.now() + 10 * 60 * 1000;

          // Generate HMAC-SHA256 signature (stateless verification token)
          const signature = crypto
            .createHmac("sha256", SERVER_SECRET)
            .update(`${email}:${otp}:${expiry}`)
            .digest("hex");

          // Configure Gmail SMTP transporter using verified credentials
          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "ai.nirikshan@gmail.com",
              pass: "vzmi hxtb dcub ixpk",
            },
          });

          // Elegant branded HTML email
          const htmlContent = `
            <div style="font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);">
              <div style="background-color: #0b1a30; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
                <h2 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">CA Vikram Biyani</h2>
                <p style="color: #f59e0b; margin: 6px 0 0 0; font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 600;">Taxation Mentor · VBTC</p>
              </div>
              <div style="padding: 32px 24px; text-align: center; color: #1e293b;">
                <h3 style="font-size: 20px; margin: 0 0 12px 0; color: #0b1a30; font-weight: 700;">Verify Your Email</h3>
                <p style="font-size: 15px; color: #64748b; line-height: 1.5; margin: 0 0 28px 0;">Please use the following 6-digit One-Time Password (OTP) to log in and continue with your course enrollment.</p>
                <div style="background-color: #f8fafc; border: 2px dashed #0b1a30; padding: 16px 36px; display: inline-block; font-size: 34px; font-weight: 800; letter-spacing: 10px; color: #0b1a30; border-radius: 12px; font-family: monospace;">
                  ${otp}
                </div>
                <p style="font-size: 12px; color: #94a3b8; margin: 28px 0 0 0;">This OTP is valid for 10 minutes. Please do not share this code with anyone.</p>
              </div>
              <div style="border-top: 1px solid #e2e8f0; padding: 24px 20px; text-align: center; font-size: 11px; color: #94a3b8; background-color: #fafafa; border-radius: 0 0 12px 12px; line-height: 1.6;">
                <p style="margin: 0; font-weight: 500;">© 2026 CA Vikram Biyani Tax Classes (VBTC). All rights reserved.</p>
                <p style="margin: 4px 0 0 0;">Bowbazar, Kolkata, West Bengal 700012 | Help: +91 98307 73655</p>
              </div>
            </div>
          `;

          // Send email
          await transporter.sendMail({
            from: `"VBTC Enrollment Support" <ai.nirikshan@gmail.com>`,
            to: email,
            subject: `${otp} is your VBTC Verification Code`,
            text: `Your verification code is ${otp}. This code is valid for 10 minutes.`,
            html: htmlContent,
          });

          return new Response(
            JSON.stringify({
              success: true,
              email,
              expiry,
              signature,
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error: any) {
          console.error("Failed to send OTP:", error);
          return new Response(
            JSON.stringify({ error: "Failed to send verification email: " + error.message }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      },
    },
  },
});
