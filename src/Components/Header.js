import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import {NavLink} from 'react-router-dom';
import Menu from '@mui/material/Menu';


function Header() {
    const [anchorEl, setAnchorEl] = useState(null) ;
    const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <Navbar bg="dark" variant="dark" style={{height:60}}>
        <Container>
          <NavLink to='/' className='text-decoration-none text-light mx-3'>Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to='/' className='text-decoration-none text-light'>Home</NavLink>
          </Nav>
          <Badge badgeContent={4} color="primary"
           id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
          <i class="fa-solid fa-cart-shopping text-light" style={{fontSize:25, cursor:'pointer'}}></i>
    </Badge>
          
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:'relative'}}>
        <i className='fas fa-close smallclose'
        onClick={handleClose}
        style={{position:"absolute",top:2,right:20,fontsize:23,cursor:"pointer"}}></i>
        <p style={{fontsize:22}}>Your Cart is Empty</p>
       </div>
      </Menu>
      </Navbar>
    </div>
  )
}

export default Header