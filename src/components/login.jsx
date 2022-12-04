import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const Login = ({setIsAuth}) => {

 let navigate = useNavigate();

  const GoogleSignIn = () => {

    signInWithPopup(auth, provider).then((result) => {

      localStorage.setItem("isAuth", true);       //contain all info of user loggedIn

      setIsAuth(true);
      navigate("/");
    });
  };


    return (
        <div className="login">
           
            <button onClick={GoogleSignIn}>
        Login with Google
      </button>
        </div>
    )
}