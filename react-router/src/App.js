import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

const App = () => {
    return (
        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ad quam sed pariatur quia sint in quisquam maiores, fugit voluptatibus expedita. Asperiores, laudantium illum corrupti est ab voluptates quod deserunt.
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='contact' element={<Contact></Contact>}></Route>
            </Routes>
        </div>
    );
};

export default App;