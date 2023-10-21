import { useState } from "react";
import { auth } from "./components/firebase-config";

import Login from "./components/login";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
function App() {

  const [isAuth, setIsAuth] = useState(false)
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      
      window.location.pathname = "/login";
    });
  };
  return (
    <>
      <Router>
        <div className="navbar bg-base-100">
          <a className="btn btn-ghost normal-case text-xl mr-4">
            social-media-app
          </a>
          <Link to="/" className="  normal-case text-lg mr-4">
            Home
          </Link>
          <Link to="/login" className="  normal-case text-lg">
            Login
          </Link>
          {isAuth ?  <button className="btn btn-error" onClick={signUserOut}>sign out</button> : <></> }
         
        </div>
        <Routes>
          <Route path="/" element={<div>test123</div>}></Route>
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
