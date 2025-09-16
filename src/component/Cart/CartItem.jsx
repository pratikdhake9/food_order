import React from 'react'
import {IconButton} from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CartItem = () => {
    return (
        <div>
            <div>
                <img className={'w-[5rem] h-[5rem] object-cover'}
                    src={'https://img.freepik.com/free-vector/summer-terrace-outdoor-city-cafe-coffeehouse-with-wooden-table-chairs-potted-plants-chalkboard-menu-cityscape-view-background-street-drinks-snacks-cafeteria-cartoon-illustration_107791-3552.jpg?semt=ais_hybrid&w=740&q=80'}/>
            </div>
            <div className={'flex items-center justify-between lg:w-[70]'}>
                <div className={'space-y-1 lg:space-y-3 w-full '}>
                    <p>Biryani</p>
                    <div className={'flex justify-between items-center'}>
                        <div className={'flex items-center space-x-1'}>
                            <IconButton>
                                <RemoveCircleOutlineIcon/>
                            </IconButton>
                            <div className={'w-5 h-5 text-xs flex items-center justify-center'}>
                                {5}
                            </div>
                            <IconButton>
                                <AddCircleOutlineIcon/>
                            </IconButton>
                        </div>
                    </div>

                </div>
                <p>₹1956</p>
            </div>
        </div>
    )
}
export default CartItem
