import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useFilterArray } from "../../../hooks/useFilterArray";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import ArticleCard from "./ArticleCard/ArticleCard";
import { setResultsAmount } from "../../../store/features/articlesSlice";

const ArticlesList = ({ searchInput }: ArtilesListProps) => {
  const { articles, isLoading } = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();

  const [filteredArticles, filterArticles, resetFilteredArticles] =
    useFilterArray(articles);

  const articlesToDisplay =
    searchInput && filteredArticles.length ? filteredArticles : articles;

  useEffect(() => {
    resetFilteredArticles();
    filterArticles("title", searchInput);
    filterArticles("summary", searchInput);
  }, [searchInput]);

  useEffect(() => {
    dispatch(setResultsAmount(articlesToDisplay.length));
  }, [filteredArticles]);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={5} alignItems="stretch">
      {articlesToDisplay.map((article) => (
        <Grid item xs={12} md={4} key={article.id} display="flex">
          <ArticleCard article={article} keywords={searchInput.split(" ")} />
        </Grid>
      ))}
    </Grid>
  );
};

type ArtilesListProps = {
  searchInput: string;
};

export default ArticlesList;
