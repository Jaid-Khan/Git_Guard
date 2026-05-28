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

    // Ignore lock files
    if (
      ignoredFiles.includes(file.filename)
    ) {
      continue;
    }

    // Ignore image/binary files
    const isIgnoredExtension =
      ignoredExtensions.some((ext) =>
        file.filename.endsWith(ext)
      );

    if (isIgnoredExtension) {
      continue;
    }

    // Ignore empty patch
    if (
      !file.patch ||
      file.patch === "No patch available"
    ) {
      continue;
    }

    // Keep only added lines
    const addedLines = file.patch
      .split("\n")
      .filter(
        (line) =>
          line.startsWith("+") &&
          !line.startsWith("+++")
      )
      .map((line) => line.substring(1))
      .join("\n");

    // Ignore empty cleaned code
    if (!addedLines.trim()) {
      continue;
    }

    cleanedFiles.push({
      filename: file.filename,
      code: addedLines,
    });
  }

  return cleanedFiles;
};

module.exports = cleanDiff;