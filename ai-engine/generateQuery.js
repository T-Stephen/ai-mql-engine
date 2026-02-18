import { systemPrompt } from "./systemPrompt.js";
import { validateQuery } from "./queryValidator.js";

export async function generateQuery(userInput, geminiClient) {
  try {
    // Build final prompt
    const prompt = `${systemPrompt}\nInput: ${userInput}\nOutput:`;

    // Call Gemini API
    const response = await geminiClient.generateContent(prompt);

    // Extract text safely
    const generatedQuery = response?.response?.text()?.trim();

    if (!generatedQuery) {
      throw new Error("AI did not return a valid query");
    }

    // Validate for security
    const validation = validateQuery(generatedQuery);

    if (!validation.valid) {
      throw new Error("Unsafe query blocked by validation layer");
    }

    return generatedQuery;

  } catch (error) {
    console.error("AI Query Generation Error:", error.message);

    return "Error: Unable to generate safe query.";
  }
}
