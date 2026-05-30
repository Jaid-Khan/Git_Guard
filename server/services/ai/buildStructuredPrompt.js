const buildStructuredPrompt = (files) => {

  return `
You are an expert Senior Software Engineer and Security Reviewer.

Analyze the provided code changes.

Return ONLY valid JSON.

Do not return markdown.
Do not return explanations outside JSON.

Format:

[
  {
    "file": "filename",
    "severity": "HIGH | MEDIUM | LOW",
    "category": "Security | Bug | Performance | Code Quality",
    "issue": "Short issue title",
    "explanation": "Why this is a problem",
    "suggestion": "How to fix it"
  }
]

If no issues exist:

[]

Code Changes:

${JSON.stringify(files, null, 2)}
`;
};

module.exports = buildStructuredPrompt;