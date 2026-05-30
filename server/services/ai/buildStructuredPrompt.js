const buildStructuredPrompt = (files) => {
  return `
You are an expert software engineer.

Review the provided pull request changes.

IMPORTANT:

Each code block contains REAL GitHub line numbers.

Return issues using the exact line number.

Return ONLY valid JSON.

Format:

[
  {
    "file": "app.js",
    "line": 17,
    "severity": "HIGH",
    "category": "Security",
    "issue": "Hardcoded Secret",
    "explanation": "Why this is dangerous",
    "suggestion": "How to fix it"
  }
]

If no issues:

[]

Code Changes:

${JSON.stringify(files, null, 2)}
`;
};

module.exports = buildStructuredPrompt;