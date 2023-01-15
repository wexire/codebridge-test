import { Card, CardMedia, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { arrowIcon, dateIcon } from "../../../../assets";
import { IArticle } from "../../../../types";
import styles from "./ArticleCard.module.scss";
import Highlighter from "react-highlight-words";

const ArticleCard = ({ article, keywords }: ArticleCardProps) => {
  const shortenDescription = (text: string) => {
    const LIMIT = 100;

    return text.length > LIMIT ? text.slice(0, LIMIT) + "..." : text;
  };

  return (
    <Card variant="outlined">
      <CardMedia
        component="img"
        image={article.imageUrl}
        className={styles.media}
      />
      <div className={styles.container}>
        <div className={styles.cardDate}>
          <img src={dateIcon} alt="dateIcon" />
          <Typography variant="h5">
            {moment(article.publishedAt).format("MMMM Do, YYYY")}
          </Typography>
        </div>
        <Typography variant="h1" className={styles.title}>
          <Highlighter
            highlightClassName={styles.highlightKeywords}
            searchWords={keywords}
            autoEscape={true}
            textToHighlight={article.title}
          />
        </Typography>
        <Typography variant="h4" className={styles.description}>
          <Highlighter
            highlightClassName={styles.highlightKeywords}
            searchWords={keywords}
            autoEscape={true}
            textToHighlight={shortenDescription(article.summary)}
          />
        </Typography>
        <div className={styles.cardFooter}>
          <Typography variant="h3">Read More</Typography>
          <img src={arrowIcon} alt="arrowIcon" />
        </div>
      </div>
    </Card>
  );
};

type ArticleCardProps = {
  article: IArticle;
  keywords: string[];
};

export default ArticleCard;
