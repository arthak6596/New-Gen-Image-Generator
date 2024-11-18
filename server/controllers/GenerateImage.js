import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { createProdia } from "prodia";

dotenv.config();

const prodia = createProdia({
  apiKey: process.env.PRODIA_API_KEY,
});

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    alert(prompt);
    const job = await prodia.generate({prompt});
    const { imageUrl, status } = await prodia.wait(job);
    const generateImage = imageUrl;
    res.status(200).json({ photo:generateImage ,status});
  } catch (error) {
    console.error("Error generating image:", error);
    next(
      createError(
        error.status || 500,
        error?.response?.data?.error?.message || error.message
      )
    );
  }
};
