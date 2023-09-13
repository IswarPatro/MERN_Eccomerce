import React from 'react'
import "../../styles/product.css"
const kitchen = () => {
  return(

    <div className='container'>
    <h1 class="text-secondary mt-4">Kitchen</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 gy-1 my-2  d-flex justify-content-center  ">
        <div class="col " style={{width:320, height:180,borderRadius:5}}>
            <div class="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aV3Sdmgw0RdvtntD8cgnPkbWIS37lMLkqw&usqp=CAU" class="card-img-top"
                    alt="Skyscrapers" style={{width:280,height:130,borderRadius:7}}/>
                      <p class="card-text text-secondary"style={{marginLeft:5}}>
                      Toilet Cleaner
                        <h5>UP TO 20% OFF </h5>                        
                      </p>
            </div>
        </div>
        <div class="col " style={{width:320, height:180,borderRadius:5}}>
            <div class="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaG-YeVjNd1k5a0xaHzcQFELFOw5p24BrmA&usqp=CAU" class="card-img-top"
                    alt="Skyscrapers" style={{width:280,height:130,borderRadius:7}}/>
                      <p class="card-text text-secondary"style={{marginLeft:5}}>
                        Bathroom Cleaner
                        <h5 >UP TO 20% OFF </h5>                        
                      </p>
            </div>
        </div>
        <div class="col " style={{width:320, height:180,borderRadius:5}}>
            <div class="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aV3Sdmgw0RdvtntD8cgnPkbWIS37lMLkqw&usqp=CAU"
                    alt="Skyscrapers"style={{width:280,height:130,borderRadius:7}}/>
                      <p class="card-text text-secondary"style={{marginLeft:5}}>
                      Detergent
                        <h5 >UP TO 20% OFF </h5>                        
                      </p>
            </div>
        </div>
        <div class="col " style={{width:320, height:180,borderRadius:5}}>
            <div class="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaG-YeVjNd1k5a0xaHzcQFELFOw5p24BrmA&usqp=CAU" class="card-img-top"
                    alt="Skyscrapers" style={{width:280,height:130,borderRadius:7}}/>
                      <p class="card-text text-secondary"style={{marginLeft:5}}>
                      Washing Shops
                        <h5 >UP TO 20% OFF</h5>                        
                      </p>
            </div>
        </div>
   
        </div>
    </div>
  
  )
}

export default kitchen