import React, { useState } from 'react'
import {AppBar, Toolbar, Typography, Tabs, Tab} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState(1);
  return (
    <div>
        <AppBar 
         sx={{backgroundColor: "#232F3D"}}
         position = "sticky">
            <Toolbar>
            <NavLink to ="/" style={{color: "white"}}> 
            <Typography>
                <LibraryBooksIcon/>
            </Typography> </NavLink>
            <Tabs 
            sx={{ml: "auto"}}
            textColor='inherit'   
            indicatorColor='primary' 
            value={value} onChange={(e, val)=>setValue(val)} > 
                <Tab LinkComponent={NavLink} to="/add" label = 'Add Product'></Tab>
                <Tab LinkComponent={NavLink} to="/books" label = 'Books'></Tab>
                <Tab LinkComponent={NavLink} to="/About" label = 'About Us'></Tab>
 
            </Tabs>
            </Toolbar>
        </AppBar>



    </div>
  )
}

export default Header