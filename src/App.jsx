import "./styling/General.css";
import "./styling/articles.css";
import "./styling/header-footer.css";
import "./styling/nav-login.css";
import "./styling/voting.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleById from "./components/ArticleById";
import NavMenu from "./components/NavMenu";
import Users from "./components/Users";
import Login from "./components/UserLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import Granim from "granim";
import { Routes, Route } from "react-router-dom";
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
            ["#E0E0E0", "#A0A0A0"],
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
        <Route path="/home/:topic" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticleById />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
