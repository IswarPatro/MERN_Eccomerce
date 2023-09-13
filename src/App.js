import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Pagenotfound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login'
import Fruits from './pages/Home/fruits';
import Veggies from './pages/Home/veggies';
import Beverages from './pages/Home/beverages';
import Kitchen from './pages/Home/kitchen';
import Grocery from './pages/Home/grocery';
import SnackStore from './pages/Home/snackStore';
import Product from './pages/Mainpage';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    
    <Routes>

      <Route path='/' element={<HomePage/>}/>
      <Route path="/product" element={<Product/>}>
      <Route path="/product/fresh_fruits" element={<Fruits/>}/>
        <Route path="/product/fresh_veggies" element={<Veggies/>}/>
        <Route path="/product/staples" element={<Grocery/>}/>
        <Route path="/product/snack" element={<SnackStore/>}/>
        <Route path="/product/beverages" element={<Beverages/>}/>
        <Route path="/product/kitchen" element={<Kitchen/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
    
      
    </>
  );
}

export default App;
