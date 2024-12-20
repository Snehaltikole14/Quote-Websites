import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getQuoteById,getQuotes } from "./features/QuoteSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Quotewithid from "./Pages/Quotewithid";


function App(){
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/quoteid" element={<Quotewithid/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
