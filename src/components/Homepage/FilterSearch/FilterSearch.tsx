import React, { useState } from "react";
import { Box, Typography, Input, Divider, InputAdornment } from "@mui/material";
import styles from "./FilterSearch.module.scss";
import { searchIcon } from "../../../assets";
import { useAppSelector } from "../../../hooks/redux";

const FilterSearch = () => {
  const articlesAmount = useAppSelector(
    (state) => state.articles.articles.length
  );
  const [searchInput, setSearchInput] = useState("");

  return (
    <Box>
      <Typography variant="h2">Filter by keywords</Typography>
      <Input
        className={styles.searchField}
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        disableUnderline
        startAdornment={
          <InputAdornment position="start" className={styles.searchIcon}>
            <img src={searchIcon} alt="searchIcon" />
          </InputAdornment>
        }
      />
      <Typography variant="h2">Results: {articlesAmount}</Typography>
      <Divider className={styles.resultsDivider} />
    </Box>
  );
};

export default FilterSearch;
