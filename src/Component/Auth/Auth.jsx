import React from 'react'
import {Box, Modal} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {style} from "../cart/Cart";
import RegisterForm from "./RegisterForm";
import {LoginForm} from "./LoginForm";

export const Auth = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const handleOnClose=()=>{
        navigate('/');
    }
    return (
        <>
          <Modal open={location.pathnme==="/account/register" || location.pathname==="/account/login" } onClose={handleOnClose} >
                <Box sx={style}>
                    { location.pathname==="/account/register"?<RegisterForm/>:<LoginForm/>}
                </Box>
          </Modal>
        </>
    )
}
