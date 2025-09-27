import React from 'react'
import {Chip, IconButton} from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const CartItem = () => {
    return (
        <div className={'px-5'}>
            <div className={'lg:flex items-center lg:space-x-5'}>
                <div >
                    <img className={'w-[5rem] h-[5rem] object-cover'}
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANnMyPxd4yi2amdmsEMa39CtoZKrTWKAAAw&s'}
                        alt={''}/>
                </div>
                <div className={'flex items-center justify-between lg:w-[70%]'}>
                    <div className={'space-y-1 lg:space-y-3 w-full'}>
                        <p>Biryani</p>
                        <div className={'flex items-center justify-between'}>
                            <div className={'items-center flex space-x-1'}>
                                <IconButton>
                                    <RemoveCircleOutlineIcon/>
                                </IconButton>
                                <div className={'w-5 h-5 flex items-center justify-center text-xs'}>
                                    {5}
                                </div>
                                <IconButton>
                                    <AddCircleOutlineIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>1956</p>
                </div>
            </div>
            <div className={'pt-3 space-x-2'}>
                {[1,1,1].map((item)=><Chip label={'bread'}/>)}
            </div>
        </div>
    )
}
