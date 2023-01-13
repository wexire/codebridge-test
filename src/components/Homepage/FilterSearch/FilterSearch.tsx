import React, { useState } from "react";
import { Box, Typography, Input, Divider, InputAdornment } from "@mui/material";
import styles from "./FilterSearch.module.scss";
import { searchIcon } from "../../../assets";

const FilterSearch = () => {
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
      <Typography variant="h2">Results:</Typography>
      <Divider className={styles.resultsDivider} />
    </Box>
  );
};

export default FilterSearch;
