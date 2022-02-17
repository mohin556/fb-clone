import { Avatar } from '@mui/material';
import React from 'react';
import './PostOption.css';
import mohin from '../../image/mohin.jpg';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import VideocamIcon from '@mui/icons-material/Videocam';
const PostOption = () => {
    const  handleSubmit= (e) =>{
     e.preventDefault();
         
    }
    return (
        <div className='post'>
             <div className="postOption-top">
              <Avatar src={mohin} />
               
               <form >
                <input type="text" className='post-input' placeholder={`whats on your mind ?`} />
                <input type="text" placeholder=' Image URL (Optional)' />
                 <button onClick={handleSubmit} type="submit" > Hide It </button>
               </form>



             </div>
             <div className="postOption-bottom">
               <div className='post-option'  >
                < VideocamIcon style={{color : 'red'}} />
                <h3>Live Video</h3>
               </div>
               <div className='post-option'  >
              < PhotoLibraryIcon style={{color : 'green'}} />
              <h3>Photo/Video</h3>
              </div>
              <div className='post-option'  >
               <InsertEmoticonIcon  style={{color : 'orange'}} />
               <h3>Feeling/Activity</h3>
              </div>


             </div>
        </div>
    );
};

export default PostOption;