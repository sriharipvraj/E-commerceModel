import React, { useState } from 'react';
import "../Styling/SignupPage.css";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import fb from "../Images/facebook.png"
import google from "../Images/google.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Products from './Products';
import Enav from './Enav';



function SignupPage() {
    const [loginData,setLoginData]=useState({
        FirstName:'',
        LastName:'',
        EmailAddress:'',
        Password:''
    })

    

    const navigate = useNavigate();
    


    const chData=(e)=>{
        const name = e.target.name;
        const value= e.target.value;
        setLoginData({...loginData,[name]:value})
    }

    const[isLoggedIn,setIsLoggedIn]=useState(true)

    
    const onLogin = async()=>{

        
        try{
            const config ={
                headers:{
                    "content-type":"application/json"
                },
                
            }
            const data1 = await axios.post("http://localhost:7000/login",loginData,config)
            // console.log(data1.data);
            navigate('/Home');
            


            

    
        }
        catch (error){
            console.log("Login failed ",error);
    
    
        }
    }

    
  return (
    <div>
        <div className='Signupform'>
        <Form className='sform' onSubmit={(e)=>e.preventDefault()}>
            <h1 id='loginHeading'> LOGIN</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email Address" name='EmailAddress' value={loginData.EmailAddress} onChange={chData} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='Password' value={loginData.Password} onChange={chData} />
      </Form.Group>
      <a id='forgotp' href='#'>Forgot Password?</a>
     <Button variant='success' id='loginbtn' onClick={onLogin}>LOGIN</Button>
     <Link to="/signup/login"> <a id='signupLink' href='#'>SignUp</a></Link>
    <Link to="/admin"> <a id='signupLink' href='#'>Admin?</a></Link>
      <a href='#' className='fblink'>
          <Button id='fbbtn'><img id='fbicon' src={fb}></img>SignIn with facebook</Button>
      </a>
      <a href='#' className='glink'>
          <Button id='gbtn' variant="danger"><img id='gicon' src={google}></img>SignIn with google</Button>
      </a>

      
     
    </Form>
    
      



        </div>
    </div>
  )
}


export default SignupPage