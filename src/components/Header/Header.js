import React, { useContext } from 'react';
import './Header.css';
import AddIcon from '@mui/icons-material/Add';
import mohin from '../../image/mohin.jpg';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
// import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import logo from '../../image/Group 2.png'
import { Avatar } from '@mui/material';
import { userContex } from './../../App';
const Header = () => {

   const [loggedInUser,setLoggedInUser] = useContext(userContex)


    return (
        <div className='header' >
             <div className="header-left">
                <img src={logo} alt="" />
                <div className='header-input' >
                <SearchIcon  />
                   <input type="text" />
                </div>
             </div>
             <div className="header-middle">

                    <div className="header-option header-option-active  ">
                     <HomeIcon fontSize='large' />
                     
                    </div>
                      <div className="header-option">
                       <FlagIcon fontSize='large' />
                      </div>
                       <div className="header-option">
                          <SubscriptionsIcon fontSize='large' />
                       </div>
                       <div className="header-option">
                          <StorefrontIcon fontSize='large' />
                      </div>
                       <div className="header-option">
                        <SupervisedUserCircleIcon fontSize='large'  />
                     </div>

            

             </div>
             <div className="header-right">
                <div className="header-info">
                    <Avatar src={loggedInUser.photo} />
                    <h4>mohinalhoque</h4>
                </div>
                <IconButton aria-label="add">
                 <AddIcon />
                </IconButton>  
                <IconButton >
                 <ForumIcon />
                </IconButton>  
                <IconButton >
                 <NotificationsActiveIcon />
                </IconButton> 


                <IconButton >
                <ExpandMoreIcon />
                </IconButton>  


             </div>
        </div>
    );
};

export default Header;