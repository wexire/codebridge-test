import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
