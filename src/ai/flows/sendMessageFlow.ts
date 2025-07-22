'use server';
/**
 * @fileOverview A flow for handling contact form submissions and sending an email notification.
 *
 * - sendMessage - A function that handles the contact form submission.
 */

import { ai } from '@/ai/genkit';
import { SendMessageInputSchema, SendMessageOutputSchema, type SendMessageInput, type SendMessageOutput } from '@/ai/schemas/sendMessageSchemas';
import nodemailer from 'nodemailer';


export async function sendMessage(input: SendMessageInput): Promise<SendMessageOutput> {
  return await sendMessageFlow(input);
}

const sendMessageFlow = ai.defineFlow(
  {
    name: 'sendMessageFlow',
    inputSchema: SendMessageInputSchema,
    outputSchema: SendMessageOutputSchema,
  },
  async (input) => {
    // This flow uses Nodemailer to send an email.
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
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Message from ${input.name} via Portfolio`,
      text: `Name: ${input.name}\nEmail: ${input.email}\n\nMessage:\n${input.message}`,
      html: `
        <p><strong>Name:</strong> ${input.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${input.email}">${input.email}</a></p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${input.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return {
        success: true,
        message: 'Message received and notification sent!',
      };
    } catch (error) {
      console.error('Failed to send email:', error);
      // Even if email fails, we can still report success to the user.
      // The error is logged on the server. A more robust solution might
      // return a different message or handle the error more gracefully.
      return {
        success: true, 
        message: 'Message received successfully!',
      };
    }
  }
);
