import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import {  useNavigate ,Link} from "react-router-dom";


function Login() {
  const navigate=useNavigate();

  const [credentials,setcredentials]=useState({email:"",password:""});

    const onSubmit= async (e)=>{
      e.preventDefault();
      console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
      const response=await fetch("https://foodapp-backend-qjrs.onrender.com/user/login",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'

        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
      });
      const json=await response.json();
      
     
      if(!json.success){
        alert("Enter your valid credentials")
      }
      else{
        localStorage.setItem("userEmail",credentials.email)
        localStorage.setItem("authToken",json.authToken)
         navigate('/');
      }

    }

    const onChange= (e) =>{
         setcredentials({...credentials,[e.target.name]:e.target.value})
    }

  return (

    <>

    <Navbar/>

    <div className='container ' style={{marginTop:"14vh"}}>

   

      
      <form onSubmit={onSubmit} >

      <div className="mb-3 ">
       <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
       <input type="email" name="email" value={credentials.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}/>
       <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" value={credentials.password}  className="form-control" id="exampleInputPassword1" onChange={onChange}/>
  </div>
  <div className='d-flex'>
    <button type="submit" className="btn btn-primary">Submit</button>
    <Link className="nav-link text-white bg-danger rounded mx-3" to="/signup">New user</Link>
  
  </div>
  

      </form>
    </div>

    </>
  )
}

export default Login
