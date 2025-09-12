import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className={'text-amber-50'}>
            <section className={'banner -z-50 relative flex flex-col justify-between items-center'}>
                <div className={'w-[60vw] z-10 text-center p-44'}>
                    <p className={'text-2xl lg:text-6xl font-bold z-10 py-5'}>Food Order</p>
                    <p className={'z-10 text-gray-300 text-xl lg:text-4xl'}>Where Every Meal Feels Like Home. Start Ordering Now!</p>
                </div>
                <div className={'cover absolute top-0 left-0 right-0'}>

                </div>
                <div className={'fadout'}>

                </div>

            </section>

        </div>
    )
}
export default Home;
