import { Avatar } from '@mui/material';
import React, { useContext, useState } from 'react';
import './PostOption.css';
import mohin from '../../image/mohin.jpg';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { userContex } from './../../App';
import { db } from '../../firebase.config';
import { collection,addDoc } from 'firebase/firestore';
const PostOption = () => {
  const [loggedInUser,setLoggedInUser] = useContext(userContex);
  const [input,setInput] = useState("");
  const [imageURL,setImageURL ] = useState("");
  const addPost = collection(db, "posts");
  
   
  const handleSubmit = async (e) =>{
    e.preventDefault();
    await addDoc(addPost, { message : input ,
            user : loggedInUser.name,
             image : imageURL,
            
      
             profile : loggedInUser.photo,})

             setImageURL("");
             setInput("")

  }



    // const  handleSubmit= (e) =>{
    //  e.preventDefault();
    //      addPost.addDoc({
    //        message : input ,
    //        user : loggedInUser.name,
    //        image : imageURL,
    //        profile : loggedInUser.photo,
    //      })


       
    //  setImageURL("");
    //  setInput("")
    // }
    return (
        <div className='post'>
             <div className="postOption-top">
              <Avatar src={loggedInUser.photo} />
               
               <form >
                <input 
                value={input}
                onChange = {(e) =>setInput(e.target.value) }
                 type="text" className='post-input' placeholder={`whats on your mind' ${loggedInUser.name } ?  `} />
                <input 
                value={imageURL}
                onChange= {(e) =>  setImageURL(e.target.value)}
                type="text" placeholder=' Image URL (Optional)' />
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