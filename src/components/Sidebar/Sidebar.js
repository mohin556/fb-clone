import React, { useContext } from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from '../../image/mohin.jpg'
import './Sidebar.css'
import { userContex } from './../../App';
const Sidebar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContex);
    return (
        <div className='sidebar' >
           <SidebarRow src={loggedInUser.photo} title={loggedInUser.name} > </SidebarRow> 
           <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 information Center"  > </SidebarRow> 
           <SidebarRow Icon={EmojiFlagsIcon} title="pages"  > </SidebarRow> 
           <SidebarRow Icon={PeopleIcon} title="friends"  > </SidebarRow> 
           <SidebarRow Icon={ChatIcon} title="Messenger"  > </SidebarRow> 
           <SidebarRow Icon={StorefrontIcon} title="Market Place"  > </SidebarRow> 
           <SidebarRow Icon={VideoLibraryIcon} title="Videos"  > </SidebarRow> 
           <SidebarRow Icon={ExpandMoreIcon} title="Market Place"  > </SidebarRow> 
        </div>
    );
};

export default Sidebar;