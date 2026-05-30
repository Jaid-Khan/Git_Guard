const formatReviewComment = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return "✅ No major issues found.";
  }

  let markdown = "# 🤖 GitGuard AI Review\n\n";

  reviews.forEach((item, index) => {
    markdown += `
## Issue ${index + 1}

**Severity:** ${item.severity}

**Category:** ${item.category}

**File:** ${item.file}

### Problem
${item.issue}

### Explanation
${item.explanation}

### Recommendation
${item.suggestion}

---
`;
  });

  return markdown;
};

module.exports = formatReviewComment;