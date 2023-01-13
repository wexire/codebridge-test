import React from "react";
import { Box } from "@mui/material";
import styles from "./HomePage.module.scss";
import FilterSearch from "../../components/Homepage/FilterSearch/FilterSearch";

const HomePage = () => {
  return (
    <Box className={styles.container}>
      <FilterSearch />
    </Box>
  );
};

export default HomePage;
