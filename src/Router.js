import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Detail from "./pages/Detail/Detail";
import Cart from "./pages/Cart/Cart";
import Mypage from "../src/pages/Mypage/Mypage";
import WishList from "./pages/WishList/WishList";
import Listpage from "./pages/Listpage/Listpage";
import PurchaseHistory from "./pages/PurchaseHistory/PurchaseHistory";
import Nav from "./components/Nav/Nav";
import Footer from "./pages/Footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/category/:categoryId" element={<Listpage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/purchasehistory" element={<PurchaseHistory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
