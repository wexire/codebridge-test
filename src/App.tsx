import { Container } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
};

export default App;
