import React from 'react'

import { useCart, useDispatchCart } from '../components/ContextReducer';
export default function Cart() {
  
  let data = useCart();
 
 
  let dispatch = useDispatchCart();
  const userEmail=localStorage.getItem("userEmail")

  const handleclick=async()=>{
    console.log(userEmail,data);
    const response=await fetch("https://foodapp-backend-qjrs.onrender.com/user/insertorder",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",

      },

      body:JSON.stringify({email:userEmail,order_data:data})

    });
   // console.log(response);

    //const json=await response.json();

    // if(!json){
    //   console.log("failed");
    // }
    dispatch({type:"DROP"})

    
  }

  if (data.length === 0) {
    return (
      <div>
       
        <div className='m-5 w-100 text-center text-white fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>
    
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md ' style={{maxHeight:"500px",overflowY:"auto"}}>
        <table className='table table-hover '>
          <thead >
            <tr >
              <th scope='col' className=' text-success fs-4'>#</th>
              <th scope='col' className=' text-success fs-4'>Name</th>
              <th scope='col' className=' text-success fs-4'>Quantity</th>
              <th scope='col' className=' text-success fs-4'>Option</th>
              <th scope='col' className=' text-success fs-4'>Amount</th>
              <th scope='col' className=' text-success fs-4'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row' className=' text-white '>{index + 1}</th>
                <td className=' text-white '>{food.name}</td>
                <td className=' text-white '>{food.qty}</td>
                <td className=' text-white '>{food.size}</td>
                <td className=' text-white '>{food.price}</td>
                <td ><button type="button" className="btn  bg-success " onClick={()=>{
                    dispatch({type:"REMOVE",index:index})
                }}>Remove</button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='text-white fs-2 mt-5'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-3 ' onClick={handleclick}  > Check Out </button>
        </div>
      </div>



    </div>
  )
}