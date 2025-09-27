import React from 'react'
import {Card, Chip, IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const RestaurantCard = () => {
    return (
        <Card className={'m-5 w-[18rem]'}>
            <div className={`${true?"cursor-pointer":"cursor-not-allowed"} relative`}>
                <img className={'w-full h-[10rem] rounded-t-md object-cover'}
                    src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/82d66b90554a59d340159fe81d882069'}
                     alt={''}
                />
                <Chip
                    size={'small'}
                    className={'absolute top-2 left-2'}
                    color={true?"success":"error"}
                    label={true?"open":"close"}
                />
            </div>
            <div className={'p-4 textPart lg:flex w-full justify-between'}>
                <div className={'space-y-1'}>
                    <p className={'font-semibold text-lg'}>Indian Fast Food</p>
                    <p className={'text-gray-500 text-sm'}>Gravity it all? Dive into our global fla..</p>
                </div>
                <div>
                    <IconButton>
                        {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}
