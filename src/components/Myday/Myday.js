import { Avatar } from '@mui/material';
import React from 'react';
import './Myday.css';

const Myday = ({image,profilepic,title,src}) => {
    return (
        <div style={{backgroundImage : `url(${image})`}}    className='myday'>
            <Avatar className='user' src={image} />
           <h4>{title}</h4> 
           <img src={src} alt="" />
          
           
        </div>
    );
};

export default Myday;