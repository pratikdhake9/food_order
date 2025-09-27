import React from 'react'
import {Button, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";


const initialValues={
    fullName:"",
    email:"",
    password:"",
    role:"ROLE_CUSTOMER"
}
const RegisterForm = () => {
    const navigate=useNavigate();
    const handleSubmit=()=>{

    }
    return (
        <div>
            <Typography variant={'h5'} className={'text-center'}>
                Login
            </Typography>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field
                        as={TextField} name={'fullName'}
                        label={'Full Name'} fullwidth variant={'outlined'} margin={'normal'}
                    />
                    <Field
                        as={TextField} name={'email'}
                        label={'email'} fullwidth variant={'outlined'} margin={'normal'}
                    />
                    <Field
                        as={TextField} name={'password'}
                        label={'password'} fullwidth variant={'outlined'} margin={'normal'}
                    />
                    <Button sx={{mt:2,padding:'1rem'}} fullWidth type={'submit'} variant={'contained'}>Login</Button>
                </Form>
            </Formik>
            <Typography variant={'body2'} align={'center'} sx={{mt:3}}>
                if have an account already?
                <Button size={'small'} onClick={()=>navigate("/account/login")}>
                    register
                </Button>
            </Typography>
        </div>
    )
}
export default RegisterForm
