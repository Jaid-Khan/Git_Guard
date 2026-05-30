const ignoredFiles = [
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
];

const ignoredExtensions = [
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".ico",
  ".webp",
];

const cleanDiff = (files) => {
  const cleanedFiles = [];

  for (const file of files) {
    if (ignoredFiles.includes(file.filename)) {
      continue;
    }

    const isIgnoredExtension =
      ignoredExtensions.some((ext) =>
        file.filename.endsWith(ext)
      );

    if (isIgnoredExtension) {
      continue;
    }

    if (
      !file.patch ||
      file.patch === "No patch available"
    ) {
      continue;
    }

    const patchLines = file.patch.split("\n");

    let githubLine = 0;

    const codeLines = [];

    for (const line of patchLines) {
      if (line.startsWith("@@")) {
        const match =
          line.match(/\+(\d+)/);

        if (match) {
          githubLine =
            Number(match[1]) - 1;
        }

        continue;
      }

      if (
        line.startsWith("+") &&
        !line.startsWith("+++")
      ) {
        githubLine++;

        codeLines.push({
          line: githubLine,
          code: line.substring(1),
        });

        continue;
      }

      if (
        !line.startsWith("-") &&
        !line.startsWith("\\")
      ) {
        githubLine++;
      }
    }

    if (!codeLines.length) {
      continue;
    }

    cleanedFiles.push({
      filename: file.filename,
      changes: codeLines,
    });
  }

  return cleanedFiles;
};

module.exports = cleanDiff;