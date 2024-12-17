import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import NavMenu from "./components/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Granim from "granim";
import "./App.css";
import { useEffect } from "react";

function App() {
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
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <NavMenu />
    </>
  );
}

export default App;
