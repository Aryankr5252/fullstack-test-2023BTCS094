import { transporter } from "../config/emailConfig.js";
import dotenv from 'dotenv'
dotenv.config()
export const registerEmail = async (email, userName, phoneNumber, gender) => {
    try {
        const mailSubject = {
            subject: "Registration Successful!",
            to: email,
            from: process.env.EMAIL_USER,
            html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body { font-family: Arial, sans-serif; background: #f4f6f8; margin: 0; padding: 20px; }
      .container { max-width: 600px; margin: auto; background: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
      .header { text-align: center; padding-bottom: 15px; border-bottom: 2px solid #eee; }
      .header h2 { color: #2c3e50; margin: 0; }
      .details { margin: 20px 0; }
      .details p { font-size: 15px; margin: 8px 0; color: #444; }
      .label { font-weight: bold; color: #2c3e50; }
      .footer { text-align: center; font-size: 13px; color: #888; border-top: 2px solid #eee; padding-top: 15px; margin-top: 20px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>Registration Successful 🎉</h2>
      </div>

      <p>Hello <b>${userName}</b>,</p>
      <p>We have received your details successfully. Here is the information you submitted:</p>

      <div class="details">
        <p><span class="label">📧 Email:</span> ${email}</p>
        <p><span class="label">📱 Phone:</span> ${phoneNumber}</p>
        <p><span class="label">👤 Gender:</span> ${gender}</p>
      </div>

      <p>Thank you for registering with us. We’ll contact you soon if needed.</p>

      <div class="footer">
        © 2025 Your Company Name. All rights reserved.
      </div>
    </div>
  </body>
</html>
`

        }
        await transporter.sendMail(mailSubject)

    }
    catch (err) {
        console.log("Somrthing went wrong in registerEmail:", err);
    }
}