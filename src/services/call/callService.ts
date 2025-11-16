import { getAI, OFFLINE_RESPONSE_TEXT, isAIAvailable } from '../core/geminiCore';
import type { PersonContact } from '@/src/data/people';

export interface CallServiceResponse {
  success: boolean;
  error?: string;
}

export const generateCallSystemInstruction = (contact: PersonContact): string => {
  return `You are ${contact.name}, ${contact.title}. 

PERSONALITY & BACKGROUND:
${contact.personality}

YOUR DETAILS:
- Born in: ${contact.cityOfBirth}
- Current city: ${contact.currentCity}
- Education: ${contact.education.map(e => `${e.degree} from ${e.institution} (${e.year})`).join(', ')}
- Hobbies: ${contact.hobbies.join(', ')}
- Friends: ${contact.friends.join(', ')}

BACKSTORY:
${contact.backstory}

COMMUNICATION STYLE:
- Be natural and conversational
- Reference your background authentically when relevant
- Maintain your professional persona while being friendly
- Speak as if you're having a real phone/video conversation
- Feel free to ask about the user and engage in two-way dialogue

Remember: You ARE this person. Respond as they would in a real conversation.`;
};

export const formatCallContext = (contact: PersonContact): string => {
  return `Calling ${contact.name} (${contact.title}) - ${contact.status}`;
};
