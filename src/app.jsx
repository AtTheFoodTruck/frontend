import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/MainPage/Home';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Login from './components/LoginPage/Login';
import ProFile from './components/ProFilePage/ProFile';
import MyPage from './components/MyPage/UserInfoConfig';
import Cart from './components/CartPage/Cart';
import Store from './components/StorePage/Store';
import MemberRegister from './components/RegisterPage/MemberRegister';
import OwnerRegister from './components/RegisterPage/OwnerRegister';

function App() {
  return (
    <Routes>
      <Route path='/profile' element={<ProFile />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/memberRegister' element={<MemberRegister />} />
        <Route path='/ownerregister' element={<OwnerRegister />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
