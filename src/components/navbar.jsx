import React from 'react';
import {BsPeople, BsFillDoorOpenFill, BsController} from "react-icons/bs";


function Navbar({isAuth}) {
  return (
    isAuth ? (<>
     <div className="Sidebar fixed shadow-lg  w-[20%] h-[100vh] ">
        <ul>
            <li className='m-3'>
            <button className='btn btn-ghost w-full'><BsFillDoorOpenFill className='w-6 h-6'></BsFillDoorOpenFill> Rooms</button>
            </li>
            <li className='m-3'>
            <button className='btn btn-ghost w-full'><BsPeople className='w-6 h-6'></BsPeople> Friends</button>
            </li>
            <li className='m-3'>
            <button className='btn btn-ghost w-full'><BsController className='w-6 h-6'></BsController> Games</button>
            </li>
        </ul>
     
    </div>
    </>) : (<></>)
   
  )
}

export default Navbar