import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "./HomePage.module.scss";
import FilterSearch from "../../components/Homepage/FilterSearch/FilterSearch";
import { fetchArticles } from "../../store/actions/articles";
import { useAppDispatch } from "../../hooks/redux";
import ArticlesList from "../../components/Homepage/ArticlesList/ArticlesList";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <Box className={styles.container}>
      <FilterSearch searchInput={searchInput} setSearchInput={setSearchInput} />
      <ArticlesList searchInput={searchInput} />
    </Box>
  );
};

export default HomePage;
