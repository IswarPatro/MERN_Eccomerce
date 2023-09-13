import React from 'react'
import "../../styles/product.css"
const snackStore = () => {
    return(

    <div className='container'>
    <h1 class="text-secondary mt-4">Snack Store</h1>
    <div class="row row-cols-1 row-cols-md-4 g-4 gy-1 my-2  d-flex justify-content-center  ">
        <div class="col " style={{width:320, height:180,borderRadius:5}}>
            <div class="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOPdCuNZm3g8g-Z6yIh_WHbT05qe-6maVbg&usqp=CAU" class="card-img-top"
                    alt="Skyscrapers" style={{width:280,height:130,borderRadius:7}}/>
                      <p class="card-text text-secondary"style={{marginLeft:5}}>
                      Chai Time Snack
                        <h5>UP TO 20% OFF </h5>                        
                      </p>
            </div>
        </div>
        <div class="col " style={{width:320, height:180,borderRadius:5}}>
            <div class="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURhYnT79KeC5MNPuwAaOA-zAZTVVrUgGBkw&usqp=CAU" class="card-img-top"
                    alt="Skyscrapers" style={{width:280,height:130,borderRadius:7}}/>
                      <p class="card-text text-secondary"style={{marginLeft:5}}>
                      Good Morning Snack
                        <h5 >UP TO 20% OFF </h5>                        
                      </p>
            </div>
        </div>
        <div class="col " style={{width:320, height:180,borderRadius:5}}>
            <div class="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoEOveLyaPuuWazzm7p6-uWGkrYpOx4y1XA&usqp=CAU" class="card-img-top"
                    alt="Skyscrapers"style={{width:280,height:130,borderRadius:7}}/>
                      <p class="card-text text-secondary"style={{marginLeft:5}}>
                      Evening Snack
                        <h5 >UP TO 20% OFF </h5>                        
                      </p>
            </div>
        </div>
        <div class="col " style={{width:320, height:180,borderRadius:5}}>
            <div class="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyB7aooS6mF8sac5zpPd7YMgK3Q1wykhCeHxLwLq_40dhVwPXsslRYssZgm_KrBIqWbo&usqp=CAU" class="card-img-top"
                    alt="Skyscrapers" style={{width:280,height:130,borderRadius:7}}/>
                      <p class="card-text text-secondary"style={{marginLeft:5}}>
                      Fast Food
                        <h5 >UP TO 20% OFF</h5>                        
                      </p>
            </div>
        </div>
   
        </div>
    </div>

    )
}

export default snackStore