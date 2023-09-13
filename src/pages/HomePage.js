import React from 'react'
import Fruits from './Home/fruits';
import Veggies from './Home/veggies';
import Kitchen from './Home/kitchen';
import Grocery from './Home/grocery';
import Header from '../components/Layout/Header';
import Beverages from './Home/beverages';
import SnackStore from './Home/snackStore';




const HomePage = () => {
  
  return (
    <div>
      <Header/>
      <Fruits/>
      <Veggies/>
      <Beverages/>
      <Grocery/>
      <SnackStore/>
      <Kitchen/>


    </div>
  )
}

export default HomePage
