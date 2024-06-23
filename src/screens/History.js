import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';

function History() {
    const userEmail=localStorage.getItem("userEmail");
    const [orderdata,setorderdata]=useState([])

    const getdata=async()=>{
        const response=await fetch("https://foodapp-backend-qjrs.onrender.com/user/showOrderHistory",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:userEmail})
            
        })

        const json=await response.json();
        //console.log(json);
         setorderdata(json);

         
    }

    useEffect(()=>{
        getdata();
    },[])

    


  return (
    <>
    <Navbar/>
    <div className=' bg-dark ' style={{height:"91vh",marginTop:"9vh"}}>
       <table className='table table-hover ' >
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
         {  
            orderdata.orders?orderdata.orders.slice(0).reverse().map((dishes)=>{
                return(
                   <>
                   {dishes.map((food,index)=>(
                    <tr key={index}>
                    <th scope='row' className=' text-white '>{index + 1}</th>
                    <td className=' text-white '>{food.name}</td>
                    <td className=' text-white '>{food.qty}</td>
                    <td className=' text-white '>{food.size}</td>
                    <td className=' text-white '>{food.price}</td>
                    </tr>
                   ))}
                   </>
                )
            })
            :[]
         }
          </tbody>
        </table>
       
    </div>
    </>
  )
}

export default History
