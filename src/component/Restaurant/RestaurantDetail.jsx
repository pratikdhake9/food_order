
import React, {useState} from 'react'
import {Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from "./MenuCard";



const categories=["pizza","biryani","burger","chicken","rice"]
const foodTypes=[{label:"All" ,value:"all"},{label:"Vegetarian only" ,value:"vegetarian"},{label:"Non-vegetarian" ,value:"non_vegetarian"},{label:"Seasonal" ,value:"seasonal"}]
const menu=[1,1,1,1];

const RestaurantDetail = () => {
    const [foodType, setFoodType] = useState("all");
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name);
    }

    return (
        <div className={'px-5 lg:px-20 '}>
            <section>
                <h3 className={'text-gray-500 py-2 mt-10'}> Home/Indian/indin fast food/3</h3>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} lg={6}>
                            <img className={'w-full h-[50vh] object-cover '}
                                 src={'https://img.freepik.com/free-vector/summer-terrace-outdoor-city-cafe-coffeehouse-with-wooden-table-chairs-potted-plants-chalkboard-menu-cityscape-view-background-street-drinks-snacks-cafeteria-cartoon-illustration_107791-3552.jpg?semt=ais_hybrid&w=740&q=80'}/>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className={'w-full h-[50vh] object-cover '}
                                 src={'https://img.freepik.com/free-vector/summer-terrace-outdoor-city-cafe-coffeehouse-with-wooden-table-chairs-potted-plants-chalkboard-menu-cityscape-view-background-street-drinks-snacks-cafeteria-cartoon-illustration_107791-3552.jpg?semt=ais_hybrid&w=740&q=80'}/>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className={'w-full h-[50vh] object-cover '}
                                 src={'https://img.freepik.com/free-vector/summer-terrace-outdoor-city-cafe-coffeehouse-with-wooden-table-chairs-potted-plants-chalkboard-menu-cityscape-view-background-street-drinks-snacks-cafeteria-cartoon-illustration_107791-3552.jpg?semt=ais_hybrid&w=740&q=80'}/>
                        </Grid>

                    </Grid>
                </div>
                <div className={'pt-3 pb-5'}>
                    <h1 className={'text-4xl font-semibold'}>Indian Fast Food</h1>
                    <p className={'text-gray-500 mt-1'}>location of this title ....</p>
                    <div className={'space-y-3 mt-3'}>
                        <p className={'text-gray-500 flex items-center gap-3'}>
                            <LocationOnIcon />
                            <span>Mumbai , Maharashtra</span>
                        </p>
                        <p className={'text-gray-500 flex items-center gap-3'}>
                            <CalendarTodayIcon/>
                            <span>Mon-Sun  9:00 AM-9:00 PM (Taday)</span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider/>
            <section className={'pt-[2rem]  lg:flex relative'}>
                <div className={'space-y-10 lg:w-[20%] filter'}>
                    <div className={'box space-y-5 lg:sticky top-28 p-5 shadow-md '}>
                        <div>
                            <Typography variant={'h5'} sx={{paddingBottom:'1rem'}}>
                                Food Type
                            </Typography>
                            <FormControl className={'py-10 space-y-5'} component={'fieldset'}>
                                <RadioGroup onChange={handleFilter} name={'food_type'} value={foodType|| 'all'}>
                                    {foodTypes.map((item)=>(
                                        <FormControlLabel
                                            key={item.label}
                                            value={item.value}
                                            control={<Radio/>}
                                            label={item.label}/>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant={"h5"} sx={{paddingBottom:'1rem'}}>
                                Food Category
                            </Typography>
                            <FormControl className={'py-10 space-y-5'} component={'fieldset'}>
                                <RadioGroup onChange={handleFilter} name={'food_type'} value={foodType|| 'all'}>
                                    {categories.map((item)=>(
                                        <FormControlLabel
                                            key={item}
                                            value={item}
                                            control={<Radio/>}
                                            label={item}/>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className={'space-y-5 lh:w-[80%] lg:pl-10'}>
                    {
                        menu.map((item)=><MenuCard/>)
                    }
                </div>
            </section>
        </div>
    )
}
export default RestaurantDetail
