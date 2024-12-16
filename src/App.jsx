import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
