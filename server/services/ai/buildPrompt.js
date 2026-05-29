const buildPrompt = (cleanedFiles) => {

  const formattedCode = cleanedFiles
    .map((file) => {

      return `
FILE: ${file.filename}

CODE:
${file.code}
      `;

    })
    .join("\n\n");

  return `
You are an expert senior software engineer and security reviewer.

Analyze the following pull request code changes.

Your job:

1. Find bugs
2. Find security vulnerabilities
3. Find performance issues
4. Find bad coding practices
5. Suggest corrected code if needed

Return response in clean markdown format.

============================

${formattedCode}

============================

Generate professional PR review feedback.
`;

};

module.exports = buildPrompt;