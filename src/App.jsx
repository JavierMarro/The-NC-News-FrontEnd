import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import ArticleById from "./components/ArticleById";
import NavMenu from "./components/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Granim from "granim";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    new Granim({
      element: "#canvas",
      direction: "left-right",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#FFFFFF", "#F0F0F0"],
            ["#F0F0F0", "#E0E0E0"],
            ["#E0E0E0", "#A9A9A9"],
          ],
        },
      },
    });
  }, []);
  return (
    <>
      <canvas id="canvas"></canvas>
      <Header />
      <NavMenu />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticleById />} />
      </Routes>
    </>
  );
};

export default App;
