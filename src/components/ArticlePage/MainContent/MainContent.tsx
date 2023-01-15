import { Card, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import styles from "./MainContent.module.scss";

const MainContent = () => {
  const { currentArticle: article } = useAppSelector((state) => state.articles);

  return (
    <Card variant="outlined" className={styles.contentCard}>
      <Typography variant="h1" className={styles.title}>
        {article?.title}
      </Typography>
      <Typography variant="h5">{article?.summary}</Typography>
    </Card>
  );
};

export default MainContent;
