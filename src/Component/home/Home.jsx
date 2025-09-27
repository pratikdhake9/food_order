import React from 'react'
import './Home.css'
import MultiItemCarousel from "./MultiItemCarousel";
import {RestaurantCard} from "../restaurant/RestaurantCard";
const restaurant=[1,1,1,1,1,1,1,1]

 const Home = () => {

    return (
        <div className={'pb-10'}>
            <section className={'banner -z-50 relative justify-center items-center flex flex-col'}>
                <div className={'w-[50vw] text-center z-10'}>
                    <p className={'text-2xl lg:text-6xl font-bold z-10 py-5'}>Food Order</p>
                    <p className={'z-10 text-gray-300 text-xl lg:text-4xl'}>Taste the Convenience: Food Fast & Delivered</p>
                </div>
                <div className={'cover absolute top-0 left-0 right-0 '}>

                </div>
                <div className={'fadout'}>

                </div>
            </section>
            <section className={'p-10 lg:py-10 lg:px-20'}>
                <p className={'text-2xl font-semibold text-gray-400 py-3 pb-10'}>Top Meals</p>
                <MultiItemCarousel/>
            </section>
            <section className={'px-5 lg:pt-5'}>
                <h1 className={'text-2xl font-semibold text-gray-400 pb-5'}>Order from our handpicked favorite</h1>
                <div>
                    {restaurant.map((item) => (<RestaurantCard/>))}
                </div>
            </section>
        </div>
    )
}
export default Home;