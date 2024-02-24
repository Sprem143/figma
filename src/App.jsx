import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./pages/Navbar";
export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
     
      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}