// https://platform.openai.com/docs/libraries
// https://github.com/openai/openai-node
// https://platform.openai.com/docs/api-reference

// OpenAI JS SDK
import OpenAI from "openai";

// create new instance of OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  // apiKey: 123,
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { content: text } = body;

  const content =
    "Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n" +
    text +
    "";

  try {
    return await openai.chat.completions.create({
      // max tokens is the number of words returned by the API (default is 16)
      max_tokens: 60,
      // the higher the temperature, the more creative the keywords will be (default is 1)
      // 0.5 is relatively conservative and good balance between creativity and relevance
      temperature: 0.5,
      // role is the entity that is speaking (user or agent)
      // content is the message that is being sent
      messages: [{ role: "user", content }],
      // model is the engine that is being used
      model: "gpt-3.5-turbo",
    });
  } catch (error) {
    return error;
  }
});
