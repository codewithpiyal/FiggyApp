import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import {Remove} from '../ReduxContainer/Action/action'

function CardDetails() {

  const [cardData, setCardData] = useState([])

  console.log(cardData)
   const dispatch= useDispatch()
  const { id } = useParams();
  const getData = useSelector((state) => state.actionToCart.carts);
  const navigate= useNavigate();
  const compareCard = () => {
    let CompareID = getData.filter((cElem) => {
      return cElem.id == id
    })
    setCardData(CompareID)
  }
  useEffect(() => {
    compareCard()
  })
  const dLT=(id)=>{
    dispatch(Remove(id))
    navigate('/')
 }
  return (
    <div className='container mt-2'>
      <h2 className='text-center mt-5'>Items Details Page</h2>
      <section className='container mt-3'>
        <div className='iteamsdetails'>
          {
            cardData.map((cElm) => {
              return (
                <>
                  <div className='items_img'>
                    <img src={cElm.imgdata}  alt='' />
                  </div>
                  <div className='details'>
                    <Table>
                      <tr>
                        <td>
                          <p><strong>Restaurant</strong>:{cElm.rname}</p>
                          <p><strong>Price</strong>  :₹ {cElm.price}</p>
                          <p><strong>Dishes</strong>  : {cElm.address} </p>
                          <p><strong>Total</strong>  :₹ {cElm.price}</p>
                          
                        </td>
                        <td>
                          <p><strong>Rating:</strong><span style={{ background: 'green', color: '#fff', margin: '2px', padding: '2px 5px', borderRadius: '5px' }}>{cElm.rating} ⁂</span></p>
                          <p><strong>Order Review:</strong><span>{cElm.somedata}</span></p>
                          <p><strong>Remove:</strong><span><i onClick={()=>dLT(cElm.id)} className='fas fa-trash' style={{ color: 'red', fontSize: '20', cursor: "pointer" }}></i></span></p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              )
            })
          }



        </div>
      </section>
    </div>
  )
}

export default CardDetails