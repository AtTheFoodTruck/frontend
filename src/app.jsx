import React from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import "./app.css";
=======
import "bootswatch/dist/sketchy/bootstrap.min.css";
import "./App.css";
>>>>>>> fce46288b9944c60bfe4e7d3fafd2c9c537e6f46
import Home from "./components/MainPage/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/LoginPage/Login";
import ProFile from "./components/ProFilePage/ProFile";
import Cart from "./components/CartPage/Cart";
import Store from "./components/StorePage/Store";
<<<<<<< HEAD

=======
import MemberRegister from "./components/RegisterPage/MemberRegister";
import OwnerRegister from "./components/RegisterPage/OwnerRegister";
>>>>>>> fce46288b9944c60bfe4e7d3fafd2c9c537e6f46
import OrderList from "./components/MyPage/OrderList";
import ReviewHistory from "./components/MyPage/ReviewHistory";
import ReviewWriting from "./components/MyPage/ReviewWriting";
import UserInfoConfig from "./components/MyPage/UserInfoConfig";
<<<<<<< HEAD
import MemberRegister from "./components/RegisterPage/MemberRegister";
import OwnerRegister from "./components/RegisterPage/OwnerRegister";
import "bootswatch/dist/sketchy/bootstrap.min.css";
=======
import SearchList from "./components/SearchListPage/SearchList";
>>>>>>> fce46288b9944c60bfe4e7d3fafd2c9c537e6f46

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<ProFile />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/review-history" element={<ReviewHistory />} />
        <Route path="/review-writing" element={<ReviewWriting />} />
        <Route path="/userinfo-config" element={<UserInfoConfig />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member-register" element={<MemberRegister />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
<<<<<<< HEAD
=======
        <Route path="/search-list" element={<SearchList />} />
>>>>>>> fce46288b9944c60bfe4e7d3fafd2c9c537e6f46
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
