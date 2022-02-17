import React from 'react';
import Header from '../Header/Header';
import PostOption from '../PostOption/PostOption';
import Sidebar from '../Sidebar/Sidebar';
import Story from '../Story/Story';
import './Home.css'
const Home = () => {
    return (
        <div className='home' >
         
            <Header></Header>
             <div className='app-body'>
             <Sidebar></Sidebar>
            <Story></Story>
        

             </div>
        </div>
    );
};

export default Home;