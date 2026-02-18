AI Query Generation API Structure

Endpoint:
POST /generate-query

Request Body:
{
  "query": "Show all users from Chennai"
}

Process:
1. User query is sent to AI engine.
2. System prompt and examples are added.
3. AI generates MongoDB Query Language (MQL).
4. Query validation checks for unsafe operations.
5. Safe query is returned to backend.

Response:
{
  "mql": "db.users.find({ city: 'Chennai' })"
}

Developer:
T. Stephen Raj (AI/ML & DevOps)
