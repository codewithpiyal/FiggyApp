import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import {NavLink} from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useSelector } from 'react-redux';
import { Table } from '@mui/material';



function Header() {

  const getData= useSelector((state)=>state.actionToCart.carts)
  console.log(getData)


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
        <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
        <Container>
          <NavLink to='/' className='text-decoration-none text-light mx-3' style={{fontWeight:900}} >Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to='/' className='text-decoration-none text-light' style={{fontWeight:900}}>Home</NavLink>
          </Nav>
          <Badge badgeContent={getData.length} color="primary"
           id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
          <i className="fa-solid fa-cart-shopping text-light" style={{fontSize:25, cursor:'pointer'}}></i>
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
      {
        getData.length?
        <div className='card_details' style={{width:"24rem",padding:10}}>
              <Table>
                <thead>
                  <tr style={{border:"solid green 1px", borderRadius:"1 px"}}>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody style={{boxShadow:"1px"}}>
                  {
                    getData.map((cElem)=>{
                      return(
                        <>
                        <tr>
                          <td>
                          <NavLink to={`/carts/${cElem.id}`} onClick={handleClose}>
                          <img src={cElem.imgdata} style={{width:"5rem",height:"5rem"}} alt=""/>
                          </NavLink>
                          
                          </td>
                          <td>
                            <p>{cElem.rname}</p>
                            <p> Price: ₹{cElem.price}</p>
                            <p>Quantity: {cElem.qnty}</p>
                            <p style={{color:"red",fontSize:20,cursor:"pointer"}}>
                              <i className='fas fa-trash smalltrash'></i>
                            </p>
                          </td>
                          <td className='mt-4' style={{color:"red",fontSize:20,cursor:"pointer"}}>
                            <i className='fas fa-trash largetrash'></i>
                          </td>
                        </tr>
                        </>
                      )
                    })
                  }
                  <p> Total: ₹ 300</p>
                </tbody>
              </Table>
        </div>: <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:'relative'}}>
        <i className='fas fa-close smallclose'
        onClick={handleClose}
        style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
        <p style={{fontSize:22}}>Your Cart is Empty</p>
        <img src='./CartImage.png' alt='cart_logo' className='emptycart_img' style={{width:"5rem",padding:10}}/>
       </div>
      }
       
      </Menu>
      </Navbar>
    </div>
  )
}

export default Header