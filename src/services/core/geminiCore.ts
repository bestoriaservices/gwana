import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

// Check localStorage first, then environment variable
const getApiKey = () => {
  const storedKey = localStorage.getItem('gemini_api_key');
  if (storedKey) return storedKey;
  return process.env.API_KEY;
};

// Initialize AI instance
export const initializeAI = () => {
  const apiKey = getApiKey();
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
    return true;
  }
  return false;
};

// Get AI instance
export const getAI = () => {
  if (!ai) {
    initializeAI();
  }
  return ai;
};

// Check if AI is available
export const isAIAvailable = () => {
  return getAI() !== null;
};

// Initialize on load
initializeAI();

export const OFFLINE_RESPONSE_TEXT = "AI features are disabled. An API key is required to use this feature.";
