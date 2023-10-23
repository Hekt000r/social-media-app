import { useState } from "react";
import { auth } from "./components/firebase-config";

import Login from "./components/login";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import CreatePost from "./components/createpost";
import Posts from "./components/posts";
import Home from "./components/home";

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
      <div class="navbar  top-0 left-0 right-0 z-50 bg-white shadow-lg border-none">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-5 p-2 shadow-lg bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        {isAuth ? 
        (<>
        <li><Link to="/createpost">Create a post</Link></li>
        </>): 
        (<></>)}
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost normal-case text-xl">Miliyan.id</a>
  </div>
  <div class="navbar-end">
    <label for="my-modal-3" class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </label>
  </div>
</div>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>}></Route>
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
          <Route path="/createpost" element={<CreatePost/>}></Route>
          <Route path="/images" element={<div>not ready</div>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
