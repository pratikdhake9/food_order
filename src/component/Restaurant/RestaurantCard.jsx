import React from 'react'
import {Card, Chip, IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export const RestaurantCard = () => {
    return (
        <Card className={'w-[18rem]'}>
            <div className={`${true? 'cursor-pointer':'cursor-not-allowed'} relative`}>
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7'}/>
             <Chip size={"small"} className={'absolute top-2 left-2 '}
             color={true?'success':'error'}
                   label={true?'open':'close'}
             />
            </div>
            <div className={'p-4 textPart lg:flex w-full justify-between'}>
                <div className={'space-y-1'}>
                    <p className={'font-semibold text-lg '}>Indian Fast Food</p>
                    <p className={'text-gray-500 text-sm'}>Craving it all? Dive into our global fla..</p>
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
