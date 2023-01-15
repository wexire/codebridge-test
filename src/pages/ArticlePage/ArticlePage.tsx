import { Box, CardMedia, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainContent from "../../components/ArticlePage/MainContent/MainContent";
import ReturnButton from "../../components/ArticlePage/ReturnButton/ReturnButton";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchOneArticle } from "../../store/actions/articles";
import styles from "./ArticlePage.module.scss";

const ArticlePage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { currentArticle: article, isLoading } = useAppSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(fetchOneArticle(Number(id)));
  }, [id]);

  return (
    <Box className={styles.container}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <CardMedia
            component="img"
            src={article?.imageUrl}
            className={styles.bannerImg}
          />
          <MainContent />
          <ReturnButton />
        </>
      )}
    </Box>
  );
};

export default ArticlePage;
