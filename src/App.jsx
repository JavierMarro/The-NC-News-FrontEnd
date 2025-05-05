import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleById from "./components/ArticleById";
import NavMenu from "./components/NavMenu";
import Users from "./components/Users";
import Login from "./components/UserLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light");
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleDarkMode} />
      <NavMenu />
      <Container className="py-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:topic" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticleById />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default App;
