import React from 'react'
import data from '../../components/Layout/data';
import "../../styles/product.css";
import { CartState } from '../../context/Context';
import { Button } from 'react-bootstrap';

const fruits = () => {
   const{
    state:{cart},
    dispatch,
   }=CartState();
  return (
    <div className='container'>
    <h1 className="text-secondary mt-4">Fresh Fruits</h1>
    <div className="row row-cols-1 row-cols-md-4 g-3 gy-1 my-2  d-flex justify-content-center  ">
        {
            data.productItems.slice(0,5).map((item,index)=>{
                return(
                    <div className="col " style={{width:250, height:400}}>
            <div className="card h-100">
            <img src={item.img} class="card-img-top"
                    alt="Skyscrapers" style={{width:200,height:250}}/>
                <div className="card-body">
                    <h5 className="card-text text-secondary">Fresho</h5>
                    <h3 className="card-title text-secondary-emphasis">{item.title} 
                    <button type="button" className="btn btn-success "style={{float:'right',height:40}}>{item.offer}</button>
                    </h3>
                    
                    <button type="button" className="btn btn-outline-secondary mt-2 pt-0" style={{width:200,height:30}}>{item.quatity}</button>
                    <p class="card-text text-secondary">
                        <h3>{item.price} </h3>
                        
                    </p>
                    {
                        cart.some(p=>p.id===item.id)?(
                            <Button onClick={()=>{
                                dispatch({
                                    type:'REMOVE_FROM_CART',
                                    payload:item
                                })
                            }} variant='danger'style={{width:200}}>Remove From Cart</Button>
                        ):(
                            <Button onClick={()=>{
                                dispatch({
                                    type:'ADD_TO_CART',
                                    payload:item
                                })
                            }}variant='success'style={{width:200}}>Add To Cart</Button>
                        )
                    }
                    
                </div>
            </div>
            </div>

                )
            }
            
            )
        }
        
    
    </div>
    </div>


  )
}
export default fruits