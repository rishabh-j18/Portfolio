/**
 * @fileOverview API route for handling contact form submissions.
 * This route uses Nodemailer directly within a standard Next.js API route
 * to send an email notification.
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  // Define the input schema for the contact form data inside the function.
  const SendMessageInputSchema = z.object({
    name: z.string().min(1, 'Name is required.'),
    email: z.string().email('Invalid email address.'),
    message: z.string().min(1, 'Message is required.'),
  });

  try {
    const body = await req.json();
    const parsedData = SendMessageInputSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json({ success: false, message: 'Invalid input.' }, { status: 400 });
    }

    const { name, email, message } = parsedData.data;

    // This logic uses Nodemailer to send an email.
    // It retrieves email configuration from environment variables.
    // Ensure you have EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, etc.
    // set up in your .env file for this to work.
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Message from ${name} via Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({
        success: true,
        message: 'Message received and notification sent!',
    });

  } catch (error) {
    console.error('Failed to send email:', error);
    // If email fails, return a failure response.
    // This provides clearer feedback to the frontend.
    return NextResponse.json({
        success: false, 
        message: 'Message received, but failed to send email notification.',
      }, 
      { status: 500 }
    );
  }
}
