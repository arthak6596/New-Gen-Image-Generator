import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-image-generator-1-3l7i.onrender.com",
});

export const GetPosts = async () => await API.get("/api/post/");
export const CreatePost = async (data) => await API.post("/api/post/", data);
export const GenerateImageFromPrompt = async (data) =>
  await API.post("/api/generateImage/", data);