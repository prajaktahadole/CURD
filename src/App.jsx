import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './components/home';
import {Login} from './components/login';
import {NewPost} from './components/NewPost'
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {

  // State to determine user is loggedIn or not.
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); 

  const SignOutt = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
       <nav>
        <Link to="/"> Home </Link>
        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          //New Post is only visible when user is logged In.
          <>
            <Link to="/newpost"> New Post </Link>         
            <button onClick={SignOutt}> Log Out</button>
          </>
        )}
      </nav>

      <Routes>
         {/* passing state as a prop to login component */}
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/newpost" element={<NewPost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />   
      </Routes>
    </Router>
  )
}

export default App
