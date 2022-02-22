import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup} from "firebase/auth";
import './Login.css';
import facebook from '../../image/facebook.jpg';
// import firebaseConfig from './../../firebase.config';
import { userContex } from './../../App';
import firebaseConfig from '../../firebase.config';

const app = initializeApp(firebaseConfig);

const Login = () => {
   const [loggedInUser,setLoggedInUser] = useContext(userContex); 
    
  //  console.log(loggedInUser)
    const signIn=()=>{
      // auth
      // .signInWithPopup(provider)
      // .then((result) => {
      //   console.log(result.user);
      // })
      // .catch((error)=> alert(error.message));
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
        .then((result) => {
         
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
            
          const {displayName,email,photoURL} = result.user;

          const signInUser = {name : displayName, mail: email,photo:photoURL};
          console.log(signInUser)
          setLoggedInUser(signInUser)
         
        }).catch((error) => {
        
          const errorCode = error.code;
          const errorMessage = error.message;
          
          const email = error.email;
         
          const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage,credential)
        });
  
      


      
    };
    return (
        <div className='login'>
            <img className='facebook-img' src={facebook} alt="" />
            <div className='login-bottom' >
            <h2>Facebook</h2> <button onClick={signIn} >Login</button>
            </div>
        </div>
    );
};

export default Login;