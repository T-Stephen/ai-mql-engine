AI MQL Engine

This module converts natural language input into MongoDB Query Language (MQL) using AI.

Developed By:
T. Stephen Raj – AI/ML & DevOps

Overview:
The AI engine allows users to write queries in natural language. The system converts the input into valid MongoDB queries using AI.

Components:

1. System Prompt
Defines rules for AI to generate only safe and valid MongoDB queries.

2. Few-Shot Examples
Improves AI accuracy by providing sample input-output pairs.

3. Query Validation Layer
Prevents unsafe database operations like delete or drop commands.

4. AI Query Pipeline
Connects user input, AI generation, and validation before execution.

5. Docker Deployment
Ensures scalable and consistent deployment.

Workflow:
User Input → AI Prompt Engine → Query Validation → Database Execution
