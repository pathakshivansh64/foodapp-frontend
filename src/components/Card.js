import React, { useContext, useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';
import { useNavigate } from 'react-router-dom';





function Card(props) {
  let data=useCart();
  let dispatch=useDispatchCart();
  
  
  let options=props.options;
  let price=Object.keys(options)
  const [qty,setqty]=useState(1);
  const [size,setsize]=useState("");
  const priceref=useRef();

  useEffect(()=>{
    setsize(priceref.current.value)
  },[])
  let finalprice=qty* parseInt(options[size]);
  const navigate=useNavigate();
  
  const handleclick=async ()=>{
   // console.log("id",props.fooditem._id,props.fooditem.name)
   // console.log("pehele bta",data);
   if(!localStorage.getItem("authToken")){
    alert('Please LogIn to order any item');
    navigate('/login');
   

   }
    let food=[]
    for(const item of data){
    //  console.log("size",item.size)
      if(item.id===props.fooditem._id&&item.size===size){
        food=item;
        break
        
      }
    }
  //  console.log("food",food);
    if(food!=[]){
      if(food.size===size){
        await dispatch({type:"UPDATE",id:props.fooditem._id,price:finalprice,qty:qty,size:size})
       // console.log("u[pdate",data);
        return
      }
      else if(food.size!=size){
        await dispatch({type:"ADD",id:props.fooditem._id,name:props.fooditem.name,price:finalprice,qty:qty,size:size})
        
        return
      }
      return
    }
   

      await dispatch({type:"ADD",id:props.fooditem._id,name:props.fooditem.name,price:finalprice,qty:qty,size:size})
      // console.log("add bta",data);
  }

 

  return (
    <div>
      <div className="card mx-3 my-3" style={{width: "18rem",maxHeight:"450px"}}>
  <img src={props.fooditem.img} className="card-img-top" style={{width: "18rem",maxHeight:"200px",objectFit:"fill"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.fooditem.name}</h5>
    <p className="card-text">food food food...</p>
    <div className=' w-100'>
        <select className='m-2 h-100 bg-success text-white rounded' onChange={(e)=>{setqty(e.target.value)}}>
            {Array.from(Array(6),(e,i)=>{
               return(
                <option key={i+1} value={i+1}>{i+1}</option>
               )
            })}
        </select>

        <select className='m-2 h-100 bg-success text-white rounded' ref={priceref} onChange={(e)=>{setsize(e.target.value)}}>
            {
              price.map((data)=>{
                return <option key={data} value={data}>{data}</option>
              })
            }
        </select>

        <div className='d-inline'>₹{finalprice}</div>
        <hr />
        <button className=' btn bg-success text-white ' onClick={handleclick}>Add To Cart</button>
        

    </div>

   
  </div>
</div>
    </div>
  )
}

export default Card
