import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './user/home'
import Signup from './user/signup'
import Signin from './user/signin'
import Notification from './user/notification'
import Profile from './user/Profile'
import Favourite from './user/favourite'
import EditProfile from './user/editprofile'

const mainrouter = () =>
(
    <div>
        {/* <menu /> */}
        <Routes>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            
            <Route path="/notification/:cryptos" element={ <Notification/> } />
            <Route path="/user/:userId" element={<Profile/>} />
            
            <Route path="/user/edit/:userId" element={<EditProfile/>} />
            <Route path="/user/favourite/:userId" element={ <Favourite/> } />
        </Routes>
    </div>
)

export default mainrouter;