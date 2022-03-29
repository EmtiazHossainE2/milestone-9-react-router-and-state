import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NotAvailable from './components/NotAvailable/NotAvailable';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';

const App = () => {
    return (
        <div className='App'>
            <Header></Header>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/friends' element={<Friends></Friends>}></Route>
                <Route path='/posts' element={<Posts></Posts>}>
                    <Route path=':postId' element={<Post></Post>}></Route>
                </Route>
                <Route path='/friend/:friendId' element={<FriendDetail></FriendDetail>}></Route>
                <Route path='*' element={<NotAvailable></NotAvailable>}></Route>
            </Routes>
        </div>
    );
};

export default App;