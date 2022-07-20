import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';

const BookDetails = () => {
    const history = useNavigate;
    const [inputs, setInputs] = useState({});
    const id= useParams.id;
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        console.log(`The Id is ${id}`);
        const fetchHandler = async ()=>{
         
            await axios.get(`http://localhost:5007/books/${id}`)
            .then((res)=>res.data)
            .then((data)=>setInputs(data.book));
           

        };
        fetchHandler();
    }, [id]);

    const sendRequest = async()=>{
        await axios.put(`http://localhost:5007/books/${id}`, {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.desciption),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(res=> res.data);
    }
    
    
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=> history("/books"))
    };

    const handleChange =(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,

        }))
    }
    console.log(inputs);
  return (


    <div>
        {inputs && (
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
                    
            

            <Button type="submit" variant="contained" >Update Book</Button>
        </Box>
    </form>)}
    
    </div>
    
  )
}

export default BookDetails