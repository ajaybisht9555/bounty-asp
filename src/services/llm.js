const Groq = require('groq-sdk');

class LLMService {
  constructor() {
    this.groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }

  /**
   * Generates a code patch based on the issue description and current file content.
   */
  async generateCodeFix(issueDescription, currentCode, fileName) {
    try {
      const prompt = `
You are an expert software engineer. Your task is to fix a bug described in a GitHub issue.
You must return ONLY the full, corrected source code for the file. 
Do NOT include markdown formatting like \`\`\`javascript, do NOT include explanations. Just the raw code.

--- Issue Description ---
${issueDescription}

--- Target File: ${fileName} ---
${currentCode}
`;

      const response = await this.groq.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama3-70b-8192',
        temperature: 0.1, // Low temperature for deterministic code generation
      });

      // Strip potential markdown blocks if the LLM ignores instructions
      let fixedCode = response.choices[0]?.message?.content || '';
      fixedCode = fixedCode.replace(/^```[a-z]*\n/gi, '').replace(/```$/g, '').trim();

      return fixedCode;
    } catch (error) {
      console.error('Error in LLM Service:', error);
      throw error;
    }
  }
}

module.exports = new LLMService();
