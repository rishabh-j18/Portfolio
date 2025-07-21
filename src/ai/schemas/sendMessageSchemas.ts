/**
 * @fileOverview Schemas and types for the sendMessageFlow.
 *
 * - SendMessageInputSchema - The Zod schema for the input of the sendMessage function.
 * - SendMessageInput - The TypeScript type for the input of the sendMessage function.
 * - SendMessageOutputSchema - The Zod schema for the output of the sendMessage function.
 * - SendMessageOutput - The TypeScript type for the output of the sendMessage function.
 */

import { z } from 'zod';

export const SendMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type SendMessageInput = z.infer<typeof SendMessageInputSchema>;

export const SendMessageOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type SendMessageOutput = z.infer<typeof SendMessageOutputSchema>;
