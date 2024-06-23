import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from "react-bootstrap/Badge"
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart, useDispatchCart } from './ContextReducer';


function Navbar() {
  const data=useCart();
  let dispatch=useDispatchCart();
  const navigate=useNavigate();
  const [cartview,setcartview]=useState(false);

  const handleclick=async()=>{
    localStorage.removeItem("authToken");
    dispatch({type:"DROP"});
    navigate('/login');
  }

  return (
    <div>
     <nav className="navbar navbar-expand-lg  bg-success w-100" data-bs-theme="dark" style={{position:"fixed",zIndex:"100",top:"0"}}>
  <div className="container-fluid">
    <Link className="navbar-brand fs-3" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>

        {(localStorage.getItem("authToken"))?
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/history">Myorders</Link>
          </li>
          :""
      }
       
       
      </ul>


      {!(localStorage.getItem("authToken"))?
        <div className='d-flex'>
          
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
      
          <Link className="btn bg-white text-success mx-1" to="/signup">SignUp</Link>
        </div>:
        <div className='d-flex'>
          <div className='btn bg-white text-success mx-1' onClick={()=>{setcartview(true)}}>
            MyCart{"  "}

           {data.length==0?"":<Badge pill bg="danger">{data.length}</Badge>}
            
            </div>
            {
            cartview?<Modal onClose={()=>setcartview(false)}><Cart></Cart></Modal>:""
            }
            

          <Link className="btn bg-white text-danger mx-1" to="/login" onClick={handleclick}>Logout</Link>
        </div>
        }
        
        
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
