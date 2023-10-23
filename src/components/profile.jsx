import React from 'react'
import { auth } from './firebase-config'

function Profile({isAuth}) {
  return (
    <div className='mt-16 grid grid-cols-1 place-items-center'>
       
        <button className=' font-semibold text-4xl mt-8 '> <img className='rounded-full w-16 h-16' src={auth.currentUser.photoURL} alt="profile" /> My profile</button>
        <h1>Friends: </h1>
        <p>not finished bruh</p>
    </div>
  )
}

export default Profile