import { Grid } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import ArticleCard from "./ArticleCard/ArticleCard";

const ArticlesList = () => {
  const articles = useAppSelector((state) => state.articles.articles);

  return (
    <Grid container spacing={5} alignItems="stretch">
      {articles.map((article) => (
        <Grid item xs={12} md={4} key={article.id}>
          <ArticleCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticlesList;
