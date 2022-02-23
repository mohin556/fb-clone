import React, { useEffect, useState } from 'react';
// import Myday from '../Myday/Myday';
import './Story.css';

import StoryRel from '../StoryRel/StoryRel';
import PostOption from '../PostOption/PostOption';
import {collection,getDoc, getDocs} from 'firebase/firestore';
import profile from '../../image/student.jpg';
import image from '../../image/confident.jpg';
// import db from './../../firebaseCloud';
import Upload from '../Upload/Upload';
import { db } from '../../firebase.config';

// import Upload from '../Upload/Upload';
// import {db} from './../../firebase.config';



const Story = () => {
    const [posts,setPosts] = useState([]);
    const postCollectionRef = collection(db,"posts");


    useEffect(()=>{
        const getPosts = async () =>{
            const data = await getDocs(postCollectionRef);
            setPosts(data.docs.map((doc) => ({...doc.data(), id:doc.id, data: doc.data() }) ))
        };

        getPosts();
    },[])
    // console.log(posts)
    // const colRef = collection(db,'posts')
    // getDoc(colRef)
    // .then((snapshot)=>{
    //   console.log(snapshot.doc)
    // })
// CANNOT SOLVEE FIREBASE DB 
    // useEffect(()=>{
    //     db.collection('posts').onSnapshot(snapshot=>(
    //       setPosts(snapshot.docs.map(doc =>doc.data()))
    //     )

    //       // setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() })))
    //     );
  
  
    //  },[]);

    return (
        <div className='story'>
           <StoryRel></StoryRel>
            <PostOption></PostOption>
            
              { posts.map((post) => (
                    <Upload 
                     key={post.id}
                     profile={post.data.profile}
                     user = {post.user}
                     message = {post.message}
                     image = {post.data.image}
                   
                    />

                ) )  

              }
             
        </div>
    );
};

export default Story;