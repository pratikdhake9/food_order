
import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo=[
    {
        category:"Nuts and seeds",
        ingredients:["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Ground Beef", "Bacon strips"]
    }
]

const MenuCard = () => {

    const handleChackBoxChange=(value)=>{
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
                        <div className={'lg:flex lg:gap-5 items-center'}>
                            <img className={'w-[7rem] h-[7rem] object-cover'}
                                src={'data:image/jpeg;base64,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'}
                                 alt={''}/>
                            <div className={'space-y-1 lg:space-y-5 lg:max-w-2xl'}>
                                <p className={'font-semibold text-xl'}>Burger</p>
                                <p>499</p>
                                <p className={'text-gray-400'}>Nice Food</p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                        <div className={'flex gap-5 flex-wrap'}>
                            {
                                demo.map((item) =>
                                    <div>
                                        <p>{item.category}</p>
                                        <FormGroup>
                                            {item.ingredients.map((item)=>
                                            <FormControlLabel control={<Checkbox onChange={()=>handleChackBoxChange(item)}/> } label={item}/>
                                            )}
                                        </FormGroup>
                                    </div>

                                )
                            }
                        </div>
                        <div className={'pt-5'}>
                            <Button variant={"contained"} disabled={false} type={"submit"}>{true?"Add to Cart":"Out of Stock"}</Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}
export default MenuCard
