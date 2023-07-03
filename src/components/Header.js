import React, { useState } from 'react'
import {AppBar, Tabs, Toolbar, Typography,Tab, autocompleteClasses} from "@mui/material"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from "react-router-dom"

function Header() {
  const [indicator,setIndicator] = useState(undefined);
  return (
    <div>
        <AppBar sx = {{backgroundColor:"#232F3D"}} position='sticky'>
          <Toolbar>
          <Typography>
            
            <LibraryBooksIcon/>
          </Typography>
          <Tabs  
          
          textColor='inherit' indicatorColor = "primary" onChange={(event,val)=>{
            setIndicator(val)
          }} value={indicator}>
            <Tab  LinkComponent={NavLink} to = "/add"  label = 'Add Product'/>
            <Tab LinkComponent={NavLink} to = "/about" label = 'About Us'/>
            <Tab LinkComponent={NavLink} to = "/books" label = 'All Books'/>
          </Tabs>
          </Toolbar>
         
        </AppBar>
    </div>
  )
}

export default Header;