import { createSlice, Action } from "@reduxjs/toolkit";
import { IArticle } from "../../types";
import { fetchArticles, fetchOneArticle } from "../actions/articles";

interface IState {
  articles: IArticle[];
  currentArticle: IArticle | null;
  loadingStatus: boolean;
  totalArticles: number;
}

const initialState: IState = {
  articles: [],
  currentArticle: null,
  loadingStatus: false,
  totalArticles: 0,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setResultsAmount: (state, action: { payload: number }) => {
      state.totalArticles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loadingStatus = false;
        state.totalArticles = action.payload.length;
        state.articles = action.payload;
      })
      .addCase(fetchOneArticle.fulfilled, (state, action) => {
        state.loadingStatus = false;
        state.currentArticle = action.payload;
      })
      .addCase(fetchArticles.pending, (state, action) => {
        state.loadingStatus = true;
      })
      .addCase(fetchOneArticle.pending, (state, action) => {
        state.loadingStatus = true;
      });
  },
});

export const { setResultsAmount } = articlesSlice.actions;
export default articlesSlice.reducer;
