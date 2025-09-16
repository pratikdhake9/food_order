import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo=[{category:"Nuts & seeds",ingredient:["Cashews"]},{category:"protein",ingredient:["Ground Beef","Bacon Strips"]}];
const MenuCard = () => {
    const handleCheckedBoxChange=(value) =>{
        console.log(value)
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className={'lg:flex items-center justify-between'}>
                        <div  className={'lg:flex items-center lg:gap-5'}>
                            <img className={'w-[7rem] h-[7rem] object-cover'} src={'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww'}
                            />
                            <div className={'space-y-1 lg:space-y-5 lg:max-w-xl'}>
                                <p className={'font-semibold text-xl'}>Burger</p>
                                <p>599</p>
                                <p className={'text-gray-400'}>nice food</p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                        <div className={'flex gap-5 flex-wrap'}>
                            {
                                demo.map((item)=>
                                    <div>
                                        <p>{item.category}</p>
                                    <FormGroup>
                                        {
                                            item.ingredient.map((item)=>(
                                            <FormControlLabel control={<Checkbox onChange={()=>handleCheckedBoxChange(item)}/>} label={item} />
                                            ))
                                        }
                                    </FormGroup>
                                    </div>
                                )
                            }
                        </div>
                        <div className={"pt-5"}>
                            <Button variant={"contained"} disabled={false} type={"submit"}> {true?"Add to Cart":"Out of Stock"}</Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default MenuCard
