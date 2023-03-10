import React from 'react';
import "../../App.css"

import InputBase from '@mui/material/InputBase';
// import { Box } from '@mui/system';
// import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function Search() {
  return (
    <div className='ms-3  bg-white search rounded-3 d-flex'>
        <InputBase placeholder='Search for products,brands and more' className='w-100 ps-3' >     
<SearchIcon />
        </InputBase>
        <div>
            <SearchIcon style={{color:"#2874f0"}} className="me-2 "></SearchIcon>
        </div>
    </div>
  )
}

export default Search
