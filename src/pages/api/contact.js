import nodemailer from 'nodemailer';

export const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');
  const honeypot = data.get('honeypot');

  // Basic spam check
  if (honeypot) {
    return new Response(JSON.stringify({ success: false, message: 'Bot detected' }), { status: 400 });
  }

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: "apikey",
      pass: import.meta.env.SENDGRID_API_KEY
    }
  });

  try {
    // Send email
    await transporter.sendMail({
      from: 'akbar.shehzad@gmail.com', // Use your verified sender email
      to: "amazhar89@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, message: 'Error sending email' }), { status: 500 });
  }
};