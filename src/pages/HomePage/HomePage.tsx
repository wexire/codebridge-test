import React, { useEffect } from "react";
import { Box } from "@mui/material";
import styles from "./HomePage.module.scss";
import FilterSearch from "../../components/Homepage/FilterSearch/FilterSearch";
import { useDispatch } from "react-redux";
import { fetchArticles } from "../../store/actions/articles";
import { AppDispatch } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import ArticlesList from "../../components/Homepage/ArticlesList/ArticlesList";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);
  console.log(articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <Box className={styles.container}>
      <FilterSearch />
      <ArticlesList />
    </Box>
  );
};

export default HomePage;
