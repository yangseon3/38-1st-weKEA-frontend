import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import Desk from "./pages/Categories/Desk";
import Chair from "./pages/Categories/Chair";
import Drawer from "./pages/Categories/Drawer";
import Shelf from "./pages/Categories/Shelf";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cat/desk" element={<Desk />} />
        <Route path="/cat/chair" element={<Chair />} />
        <Route path="/cat/drawer" element={<Drawer />} />
        <Route path="/cat/shelf" element={<Shelf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
