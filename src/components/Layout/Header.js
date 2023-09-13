import React  from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth"
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import {FormControl,Nav,Dropdown, Badge} from "react-bootstrap"
import { CartState } from "../../context/Context";

const Header = () => {
  const[auth,setAuth]=useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:"",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  }
  const {
    state: { cart },

    productDispatch
  } = CartState();


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary flex-wrap">
        <div className="container">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/" className="navbar-brand text-success">
              🛒 Healthy Basket
            </Link>
          <div className="collapse navbar-collapse mx-2 " id="navbarTogglerDemo01">
            
            <div className="dropdown">
              <button className="btn btn-success dropdown-toggle mt-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </button>
              <ul className="dropdown-menu dropdown-menu-dark mr-auto container w-auto">
                <li><a className="dropdown-item " href="/product/fresh_fruits">Fresh Fruits</a></li>
                <li><a className="dropdown-item " href="/product/fresh_veggies">Fresh Vegetables</a></li>
                <li><a className="dropdown-item " href="/product/beverages">Beverages</a></li>
                <li><a className="dropdown-item " href="/product/staples">Your Daily Staples</a></li>
                <li><a className="dropdown-item " href="/product/snack">Snack Store</a></li>
                <li><a className="dropdown-item " href="/product/kitchen">Kitchen</a></li>
              </ul>
            </div> 
             
                
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <FormControl 
                style={{width:500,height:40}}
                placeholder="Search your products"
                className="justify-content-center mt-2"
                onChange={(e)=>{
                  productDispatch({
                    type:"FILTER_BY_SEARCH",
                    payload:e.target.value,
                  })
                }}
                
            /> 
              
              {
                !auth.user?(
                <> 
                <li className="nav-item ">
                <NavLink to="/login" className="nav-link">
                <button type="button" className="btn btn-success"style={{minHeight:30}}>Login/Signup</button>
                </NavLink>
              </li>
                </>):(
                <>
                <li className="nav-item ">
                <NavLink onClick={handleLogout} to="/login" className="nav-link">
                <button type="button" class="btn btn-success"style={{minHeight:30}}>LOGOUT</button>
                </NavLink>
              </li></>)
              }
            </ul>
            <Nav>
          
                  <Dropdown alignRight>
                    <Dropdown.Toggle variant="success">
                      <FaShoppingCart color="white" fontSize="25px" />
                      <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    
                  </Dropdown>
                </Nav>
          </div>
          
        </div>        
      </nav>
    </>
    
  );
};


export default Header;