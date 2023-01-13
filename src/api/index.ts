import axios from "axios";

const API = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3/articles",
});

export const getAllArticles = () => API.get("/");
export const getOneArticle = (id: number) => API.get(`/${id}`);
