/**
 * @fileOverview API route for handling contact form submissions.
 * This route uses Genkit to define a flow that sends an email notification
 * using Nodemailer. It's structured to be deployed as a serverless function on Vercel.
 */

import { NextRequest } from 'next/server';
import { toApiHandler } from '@genkit-ai/next';
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Define the input schema for the contact form data.
export const SendMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type SendMessageInput = z.infer<typeof SendMessageInputSchema>;

// Define the output schema for the API response.
export const SendMessageOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type SendMessageOutput = z.infer<typeof SendMessageOutputSchema>;

// Define the Genkit flow for sending the message.
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
      // If email fails, return a failure response.
      // This provides clearer feedback to the frontend.
      return {
        success: false, 
        message: 'Message received, but failed to send email notification.',
      };
    }
  }
);

// Expose the flow as a Vercel-compatible API handler.
export const POST = toApiHandler(sendMessageFlow, {
    input: async (req: NextRequest) => await req.json(),
});
