import React from 'react'
import {Routes , Route } from 'react-router-dom'

import Main from '../Main/Main';

const AllRouter = () => {
    return (
        <Routes>
            
            <Route path = "/" element ={<Main/>} />
          
        </Routes>
    )
}

export default AllRouter;



  {/*
    import SideBar from '../Dashboard/SideBar/SideBar';
import Footer from '../Footer/Footer';
     <Route path="/" element={<SideBar/>}/> 
            <Route path="/Footer" element ={<Footer/>} /> */}