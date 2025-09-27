import React from 'react'
import OrderCard from "./OrderCard";

export const Orders = () => {
    return (
        <div className={'flex flex-col items-center'}>
            <h1 className={'text-xl text-center py-3 font-semibold'}>My Orders</h1>
            <div className={'space-y-5 w-full lg:w-1/2'}>
                {
                    [1,1,1,1,1].map((order) => <OrderCard/>)
                }
            </div>
        </div>
    )
}
