import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const { data } = await api.getAllArticles();

    return data;
  }
);

export const fetchOneArticle = createAsyncThunk(
  "articles/fetchOneArticle",
  async (id: number) => {
    const { data } = await api.getOneArticle(id);

    return data;
  }
);
