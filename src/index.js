// import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home/index.jsx";
import Header from "./Header/index.jsx";
import Footer from "./Footer/index.jsx";
// import SobreNos from "./Sobre-nos/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sobre-nos" element={<SobreNos />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
