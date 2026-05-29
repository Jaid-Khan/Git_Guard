const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

module.exports = groq;

// const Groq = require("groq-sdk");

// console.log("GROQ KEY:", process.env.GROQ_API_KEY);

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });

// module.exports = groq;