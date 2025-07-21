'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendMessage - A function that handles the contact form submission.
 */

import { ai } from '@/ai/genkit';
import { SendMessageInputSchema, SendMessageOutputSchema, type SendMessageInput, type SendMessageOutput } from '@/ai/schemas/sendMessageSchemas';


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
    
    return {
      success: true,
      message: 'Message received successfully!',
    };
  }
);
