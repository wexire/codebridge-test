import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFilterArray } from "../../../hooks/useFilterArray";
import { useAppSelector } from "../../../hooks/redux";
import { IArticle } from "../../../types";
import ArticleCard from "./ArticleCard/ArticleCard";

const ArticlesList = ({ searchInput }: ArtilesListProps) => {
  const articles = useAppSelector((state) => state.articles.articles);
  const [filteredArticles, filterArticles, resetFilteredArticles] =
    useFilterArray(articles);

  const articlesToDisplay =
    searchInput && filteredArticles.length ? filteredArticles : articles;

  useEffect(() => {
    resetFilteredArticles();
    filterArticles("title", searchInput);
    filterArticles("summary", searchInput);
  }, [searchInput]);

  return (
    <Grid container spacing={5} alignItems="stretch">
      {articlesToDisplay.map((article) => (
        <Grid item xs={12} md={4} key={article.id} display="flex">
          <ArticleCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
};

type ArtilesListProps = {
  searchInput: string;
};

export default ArticlesList;
