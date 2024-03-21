import nodemailer from "nodemailer"

// Function to send email
export async function sendEmail(email: string, message: string) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shema.talks@gmail.com',
        pass: 'shema@myself.com', 
      },
    });

    
    const mailOptions = {
      from: 'shema.talks@gmail.com', 
      to: email, 
      subject: 'Subject of the email', 
      text: message, 
    };

    
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent: ' + info.response);
    return true; 
  } catch (error) {
    console.error('Error sending email:', error);
    return false; 
  }
}
