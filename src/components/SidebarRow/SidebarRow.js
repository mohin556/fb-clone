import { Avatar } from '@mui/material';
import React, { useContext } from 'react';
import './SidebarRow.css'
import { userContex } from './../../App';
const SidebarRow = ({title,Icon,src}) => {
    const [loggedInUser,setLoggedInUser] = useContext(userContex);
    return (
        <div className='sidebar-row'  >
            
            {src && <Avatar src={loggedInUser.photo} />}
            {Icon && <Icon/>}
              
            <h4> {title}  </h4> 
          
        </div>
    );
};

export default SidebarRow;