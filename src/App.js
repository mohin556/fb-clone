import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';


export const userContex = createContext();
function App() {
  const [loggedInUser,setLoggedInuser] = useState(null);
//  const user = null;

  return (
    // <div className='app'>
    //     { user? (
    //    <Login/>
    //    ) : (
    // <Home ></Home>
    // )

    //   }
        
    // </div>
    <userContex.Provider value={[loggedInUser,setLoggedInuser]} className='app' >
      { !loggedInUser? (
        <Login/>
      ) : (
        <Home ></Home>
      )

      }
    
     
    </userContex.Provider>
  );
}

export default App;
