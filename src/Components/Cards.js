import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from './CardsData';
import './style.css'

function Cards() {
    const[cdata,SetCdata]=useState(CardsData)
    
    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add To Cart Projects</h2>
            <div className='row d-flex justify-content-center align-items-center'>
            {
            cdata.map((cElem,i)=>{
                return (
                    <>
                <Card style={{ width: '22rem',border:'none'}} className='mx-2 mt-4 card_style'>
                <Card.Img variant="top" src={cElem.imgdata} style={{height:"16rem"}} className='mt-3'/>
                <Card.Body>
                    <Card.Title>{cElem.rname}</Card.Title>
                    <Card.Text>
                      Price: ₹ {cElem.price}
                    </Card.Text>
                    <div className='button_div d-flex justify-content-center'>
                    <Button variant="success" className='col-lg-12'>Add To Cart</Button>
                    </div>
                    
                </Card.Body>
            </Card>
            </>
                )
            })
        }
            </div>
        </div>
    )
}

export default Cards