AI Engine Integration Guide

1. Import generateQuery function:

import { generateQuery } from "./ai-engine/generateQuery.js";

2. Pass user input to function:

const mql = await generateQuery(userInput, geminiClient);

3. Return generated MQL to frontend.

Endpoint Example:
POST /generate-query

Request:
{
  "query": "Show all users from Chennai"
}

Response:
{
  "mql": "db.users.find({ city: 'Chennai' })"
}
