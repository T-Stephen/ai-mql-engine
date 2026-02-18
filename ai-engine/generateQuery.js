import { systemPrompt } from "./systemPrompt.js";
import { validateQuery } from "./queryValidator.js";

export async function generateQuery(userInput, geminiClient) {
  const prompt = `${systemPrompt}\nInput: ${userInput}\nOutput:`;

  const response = await geminiClient.generateContent(prompt);

  const generatedQuery = response.text();

  const validation = validateQuery(generatedQuery);

  if (!validation.valid) {
    throw new Error("Unsafe query blocked");
  }

  return generatedQuery;
}
