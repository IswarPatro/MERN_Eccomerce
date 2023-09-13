import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
import { useAuth } from '../../context/auth';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const[auth,setAuth]=useAuth();
    const navigate=useNavigate();

// form function
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{
               
                email,
                password,
                
            })
            if(res && res.data.success){
                toast.success("Login Successfully");
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token,
                })
                localStorage.setItem('auth',JSON.stringify(res.data));
                navigate("/");
            }
            else{
                toast.error("Invalid UserId Or Password")
            }
            
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }
  return (
    <Layout title="Register-Healthy Basket">
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h4 className="title">LOGIN FORM</h4>
           
            <div className="mb-3">
                
                <input type="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}className="form-control" id="exampleInputEmail1"
                placeholder="Enter Your Email"
                required
                />
            </div>
            <div className="mb-3">
                
                <input type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="form-control" id="exampleInputpassword"
                placeholder="Enter Your Password"
                required
                />
            </div>           
            <button type="submit" className="btn btn-primary">Submit</button>
            <p className="forgot-password text-right mt-2">
                Don't have account ? 
                <a href="/register" class="link-primary"> Signup </a>
            </p>
            
            </form>

        </div>
    </Layout>
  )
}

export default Login