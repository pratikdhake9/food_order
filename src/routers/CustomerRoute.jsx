import React from 'react'
import {NavBar} from "../Component/navbar/NavBar";
import {Routes , Route} from "react-router-dom";
import Home from "../Component/home/Home";
import {RestaurantDetails} from "../Component/restaurant/RestaurantDetails";
import Cart from "../Component/cart/Cart";
import Profile from "../Component/profile/Profile";
import {Auth} from "../Component/Auth/Auth";
const CustomerRoute = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/account/:register'} element={<Home/>}/>
                <Route path={'/restaurant/:city/:title/:id'} element={<RestaurantDetails/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'/my-profile/*'} element={<Profile/>}/>
            </Routes>
            <Auth/>
        </div>
    )
}
export default CustomerRoute
