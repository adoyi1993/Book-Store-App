import React from "react";
import { FormLabel, TextField, FormControl, Checkbox, FormControlLabel} from "@mui/material";
import {Box} from "@mui/system";
import { Button } from '@mui/material';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const history = useNavigate;
        const [inputs, setInputs] = useState({
            name : "",
            description: "",
            price: "",
            author: "",
            image: "" 
        });
   const [checked, setChecked] = useState(false);
        const handleChange = (e)=>{
            setInputs((prevState)=>({
                ...prevState,
                [e.target.name]: e.target.value,
            }))
        
        }

const sendRequest = async ()=>{
    await axios.post ("http://localhost:5007/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.desciption),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked)
    }).then(res=> res.data);
}


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=>history('/books'))

}
       

  return (
    <form  onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent="center" maxWidth={700} alignContent="center" alignSelf={"center"} marginLeft="auto" marginRight={"auto"} marginTop= {10}>
            <FormLabel>Name</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="name"
            value={inputs.name}
            onChange={handleChange}
            />
            <FormLabel>Author</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="author"
            value={inputs.author}
            onChange={handleChange}
            />
            <FormLabel>Description</FormLabel>
            <TextField margin="normal" fullWidth variant="outlined" name="description"
            value={inputs.description}
            onChange={handleChange}
            />
            <FormLabel>Price</FormLabel>
            <TextField  type={"number"} margin="normal" fullWidth variant="outlined" name="price"
            value={inputs.price}
            onChange={handleChange}
            />
            <FormLabel>Image</FormLabel>
            <TextField  margin="normal" fullWidth variant="outlined" name="image"
            value={inputs.image}
            onChange={handleChange}
            />
            <FormControlLabel control={<Checkbox Checked={checked} onChange={()=>setChecked(!checked)}/>} label="Available" />
                    
            

            <Button type="submit" variant="contained" >Add Book</Button>
        </Box>
    </form>
  )
}

export default AddBook;