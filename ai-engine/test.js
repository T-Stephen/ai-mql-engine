import { systemPrompt } from "./systemPrompt.js";
import { validateQuery } from "./queryValidator.js";

const testQuery = "Show all users from Chennai";

console.log("System Prompt Loaded");

const fakeAIOutput = 'db.users.find({ city: "Chennai" })';

const result = validateQuery(fakeAIOutput);

console.log("Generated Query:", fakeAIOutput);
console.log("Validation:", result);
