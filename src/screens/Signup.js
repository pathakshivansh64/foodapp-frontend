import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

function Signup() {
    const navigate=useNavigate();
    const [credentials,setcredentials]=useState({name:"",email:"",password:""});

    const onSubmit= async (e)=>{
      e.preventDefault();
      console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password}))
      const response=await fetch("https://foodapp-backend-qjrs.onrender.com/user/signup",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'

        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
      });
      const json=await response.json();
      console.log(json);

      if(json.success){
        alert("Signed Up Successfully!!! \nPlease LogIn with your credentials");
        navigate('/login')
      }
      else{
        alert(json.message)
      }

    }

    const onChange= (e) =>{
         setcredentials({...credentials,[e.target.name]:e.target.value})
    }

  return (
    <>
    <Navbar/>
    <div className='container ' style={{marginTop:"14vh"}}>
    <form onSubmit={onSubmit}>
    <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" name="name" value={credentials.name} className="form-control" id="exampleInputName1" aria-describedby="NameHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" value={credentials.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" value={credentials.password}  className="form-control" id="exampleInputPassword1" onChange={onChange}/>
  </div>
  <div className='d-flex gap-4 py-3'>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link className="nav-link text-white bg-danger rounded" to="/login">Already a user</Link>
  </div>
  
</form>
    </div>
    </>
  )
}

export default Signup
