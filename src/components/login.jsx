import React, { useState } from "react";
import { auth, provider, signInPopup } from "./firebase-config";
import { FcGoogle } from "react-icons/fc";
import "../App.css";
import { useNavigate } from "react-router-dom";
function Login({setIsAuth}) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInPopup(auth, provider).then((result) => {
      console.log(result);
      setIsAuth(true);
      localStorage.setItem("isAuth", true)
      navigate("/")
    });
  };

  return (
    <>
      <div className="Login flex justify-center content-center align-middle mt-60 ml-[30%] flex-col  bg-white">
        <h1 className="font-extrabold text-4xl">Welcome, please log in: </h1>

        <button onClick={signInWithGoogle} className="a w-64 h-12  btn">
          {" "}
          <FcGoogle className="a w-6 h-6"></FcGoogle> Sign in with google
        </button>
      </div>
    </>
  );
}

export default Login;
