import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootswatch/dist/sketchy/bootstrap.css';
import './App.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import Home from './components/MainPage/Home';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import Login from './components/LoginPage/Login';
import ProFile from './components/ProFilePage/ProFile';
import Cart from './components/CartPage/Cart';
import Store from './components/StorePage/Store';
import MemberRegister from './components/RegisterPage/MemberRegister';
import OwnerRegister from './components/RegisterPage/OwnerRegister';
import OrderListPage from './components/MyPage/OrderListPage';
import ReviewHistory from './components/MyPage/ReviewHistory';
import ReviewWriting from './components/MyPage/ReviewWriting';
import UserInfoConfig from './components/MyPage/UserInfoConfig';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import OrderPage from './components/OrderPage/OrderPage';
import SearchList from './components/SearchListPage/SearchList';

function App() {
  return (
    // <SearchContextProvider>
    <Routes>
        <Route path='/profile' element={<ProFile />} />
        <Route element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order-list' element={<OrderListPage />} />
        <Route path='/order-page/:storeId' element={<OrderPage />} />
        <Route path='/review-history' element={<ReviewHistory />} />
        <Route path='/review-writing' element={<ReviewWriting />} />
        <Route path='/userinfo-config' element={<UserInfoConfig />} />
        <Route path='/login' element={<Login />} />
        <Route path='/member-register' element={<MemberRegister />} />
        <Route path='/owner-register' element={<OwnerRegister />} />
        <Route path='/search-list' element={<SearchList />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
