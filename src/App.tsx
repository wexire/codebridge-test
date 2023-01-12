import { Container } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
};

export default App;
