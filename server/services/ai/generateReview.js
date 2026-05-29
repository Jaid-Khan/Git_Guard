const groq = require("../../config/groq");

const buildPrompt = require("./buildPrompt");

const generateReview = async (cleanedFiles) => {

  try {

    const prompt = buildPrompt(cleanedFiles);

    console.log("\n==============================");
    console.log("🧠 SENDING CODE TO AI");
    console.log("==============================");

    const completion =
      await groq.chat.completions.create({

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        model: "llama-3.1-8b-instant",

        temperature: 0.2,

      });

    const aiReview =
      completion.choices[0]?.message?.content;

    return aiReview;

  } catch (error) {

    console.error("❌ AI Review Generation Failed");
    console.error(error.message);

    throw new Error("AI review failed");
  }
};

module.exports = generateReview;