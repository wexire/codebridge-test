import axios, { AxiosResponse } from "axios";
import { IArticle } from "../types";

const API = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v3/articles",
});

export const getAllArticles = (): Promise<AxiosResponse<IArticle[]>> =>
  API.get("/");
export const getOneArticle = (id: number): Promise<AxiosResponse<IArticle>> =>
  API.get(`/${id}`);
