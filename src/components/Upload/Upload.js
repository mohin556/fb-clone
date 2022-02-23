import { Avatar } from '@mui/material';

import './Upload.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase.config';

const Upload = ({profile,user,message,image,date}) => {
  
    console.log(user,message)




    return (
        <div className='upload'>
                <div className='upload-top'>
                   
                <Avatar src={profile} className='upload-avatar' /> 
                 <div className='upload-topInfo'>
                  <h3>{user}</h3>
                 </div>

                 </div>
                 <div className='upload-bottom'>
                     <p>{message}</p>

                 </div>
                  <div className="upload-image">
                      <img src={image} alt="" />
                  </div>
                
               <div className='upload-options'>
                  <div className='upload-option'>
                       <ThumbUpIcon />
                       <p>Like</p>
                  </div>
                  <div className='upload-option'>
                       <ChatBubbleIcon />
                       <p>Comment</p>
                  </div>
                  <div className='upload-option'>
                       < NearMeIcon />
                       <p>Share</p>
                  </div>
                  <div className='upload-option'>
                       <AccountCircleIcon/>
                       < ExpandMoreIcon />
                     
                  </div>
               </div>




        </div>
    );
};

export default Upload;