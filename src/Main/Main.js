import React from 'react';
import StudentCard from '../Cards/StudentCard';
import SideBar from '../Dashboard/SideBar/SideBar';
import Footer from '../Footer/Footer';
import Sidebar from '../Heard/Sidebar';
import Navbar from '../NavBar/NavBar';

const Main = () => {
  return (
    <div className='main1'>
      <Navbar/>
       {/* <SideBar /> */}
       <Sidebar/>
      {/* <StudentCard/> */}
      {/* <Footer /> */}
    </div>
  )
};

export default Main;
