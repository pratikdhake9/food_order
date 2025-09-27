import React from 'react'
import {Avatar, Box, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './NavBar.css'
import {blue} from "@mui/material/colors";
import {useNavigate} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

export const NavBar = () => {
    const navigate=useNavigate();
    return (
        <Box  className={'px-5 sticky top-0 z-50 py-[.8rem] bg-fuchsia-900 lg:px-20 flex justify-between'}>
                <div className={'lg:mr-10 cursor-pointer flex items-center space-x-4'}>
                    <li className={'logo font-semibold text-white text-2xl'}>
                        Food Order
                    </li>
                </div>
            <div className={'flex items-center space-x-2 lg:space-x-10'}>
                <div >
                    <IconButton>
                        <SearchIcon sx={{fontSize: '1.5rem'}}/>
                    </IconButton>
                </div>
                <div className={''}>
                    { false?<Avatar sx={{bgcolor:'white' , color:blue.A400}}>C</Avatar> :
                        <IconButton onClick={()=>navigate('/account/login')}>
                            <PersonIcon/>
                        </IconButton>}
                </div>
                <div >
                    <IconButton>
                        <Badge color={'black'} badgeContent={3} >
                            <ShoppingCartIcon sx={{fontSize: '1.5rem'}}/>
                        </Badge>

                    </IconButton>
                </div>
            </div>

        </Box>
    )
}

