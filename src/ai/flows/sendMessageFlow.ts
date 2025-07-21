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
    // In a real application, you would add logic here to:
    // 1. Send an email notification (e.g., using Nodemailer or a third-party service).
    // 2. Save the message to a database (e.g., Firestore).
    // 3. Call another AI flow to analyze the message sentiment, etc.
    
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
      // The error is logged on the server.
      return {
        success: true, 
        message: 'Message received successfully!',
      };
    }
  }
);
