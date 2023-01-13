import { createSlice } from "@reduxjs/toolkit";
import { IArticle } from "../../types";
import { fetchArticles, fetchOneArticle } from "../actions/articles";

interface IState {
  articles: IArticle[];
  currentArticle: IArticle | null;
}

const initialState: IState = {
  articles: [],
  currentArticle: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
      })
      .addCase(fetchOneArticle.fulfilled, (state, action) => {
        state.currentArticle = action.payload;
      });
  },
});

export default articlesSlice.reducer;
