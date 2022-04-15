import React from 'react';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import 'bootswatch/dist/sketchy/bootstrap.min.css';
=======
import './App.css';
>>>>>>> feature-orderlist
import Home from './components/MainPage/Home';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Login from './components/LoginPage/Login';
import ProFile from './components/ProFilePage/ProFile';
import Cart from './components/CartPage/Cart';
import Store from './components/StorePage/Store';
<<<<<<< HEAD
import MemberRegister from './components/RegisterPage/MemberRegister';
import OwnerRegister from './components/RegisterPage/OwnerRegister';
=======
>>>>>>> feature-orderlist
import OrderList from './components/MyPage/OrderList';
import ReviewHistory from './components/MyPage/ReviewHistory';
import ReviewWriting from './components/MyPage/ReviewWriting';
import UserInfoConfig from './components/MyPage/UserInfoConfig';
<<<<<<< HEAD
import SearchList from './components/SearchListPage/SearchList';
=======
import MemberRegister from './components/RegisterPage/MemberRegister';
import OwnerRegister from './components/RegisterPage/OwnerRegister';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
>>>>>>> feature-orderlist

function App() {
  return (
    <Routes>
      <Route path='/profile' element={<ProFile />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order-list' element={<OrderList />} />
        <Route path='/review-history' element={<ReviewHistory />} />
        <Route path='/review-writing' element={<ReviewWriting />} />
        <Route path='/userinfo-config' element={<UserInfoConfig />} />
        <Route path='/login' element={<Login />} />
        <Route path='/member-register' element={<MemberRegister />} />
        <Route path='/owner-register' element={<OwnerRegister />} />
<<<<<<< HEAD
        <Route path='/search-list' element={<SearchList />} />
        <Route path='/search-list' element={<SearchList />} />
=======
>>>>>>> feature-orderlist
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
