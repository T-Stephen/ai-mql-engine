import express from "express";
import { generateQuery } from "./ai-engine/generateQuery.js";

const app = express();
app.use(express.json());

app.post("/generate", async (req, res) => {
  try {
    const { query } = req.body;

    const fakeGeminiClient = {
      generateContent: async () => ({
        response: {
          text: () => '{"find":"students","filter":{"marks":{"$gt":80}}}'
        }
      })
    };

    const result = await generateQuery(query, fakeGeminiClient);

    res.json({ success: true, result });

  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.listen(3000, () => {
  console.log("AI Engine running on port 3000");
});
