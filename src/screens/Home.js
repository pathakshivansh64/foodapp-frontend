import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


function Home() {
  
  const [search,setsearch]=useState('');
  const [fooddata,setfooddata]=useState([]);
  const [footcat,setfoodcat]=useState([]);

  const loaddata=async()=>{
   const response =await fetch("https://foodapp-backend-qjrs.onrender.com/data/displaydata",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    }
    
   })
   const json=await response.json();
   if(json){
       setfooddata(json[0]);
       setfoodcat(json[1]);
   }
  }

  useEffect(()=>{
   loaddata();
  },[])




  return (
    <div>
      <Navbar/> 

      <div>
      <div id="carouselExampleControls" className="carousel slide " data-ride="carousel" style={{objectFit:"contain !important"}} >
 
 <div className="carousel-inner mt-5" id='carousel' >
   <div className="carousel-caption" style={{zIndex:"10"}}>
   <div className="d-flex" role="search">
     <input className="form-control me-2 text-green" style={{filter:"brightness(90%)"}} type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setsearch(e.target.value)}/>
     
   </div>
   </div>
   <div className="carousel-item active" >
     <img className="d-block w-100 " src="https://media.istockphoto.com/id/1377372234/photo/pizza-with-salami-bell-pepper-tomatoes-and-cheese-pickles-bacon-and-sausages-on-a-light.jpg?s=2048x2048&w=is&k=20&c=fJSdqPozKDd5p9NO-AYmRJs5U6I9ai-LR8ihzraGx3c="  style={{filter:"brightness(30%)"}} alt="First slide"/>
   </div>
   <div className="carousel-item">
     <img className="d-block w-100" src="https://parade.com/.image/t_share/MjAwMjQwOTU4NDg1MzA4NTI0/what-happens-if-you-eat-a-burger-every-day.jpg" style={{filter:"brightness(30%)"}} alt="Second slide"/>
   </div>
   <div className="carousel-item">
     <img className="d-block w-100" src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg" style={{filter:"brightness(30%)"}} alt="Third slide"/>
   </div>
 </div>
<button className="carousel-control-prev" data-bs-target="#carouselExampleControls" type="button" data-bs-slide="prev">
   <span className="carousel-control-prev-icon " aria-hidden="true"></span>
   <span className="visually-hidden">Previous</span>
 </button>
 <button className="carousel-control-next " data-bs-target="#carouselExampleControls" type="button" data-bs-slide="next">
   <span className="carousel-control-next-icon " aria-hidden="true"></span>
   <span className="visually-hidden ">Next</span>
 </button>
</div>
      </div>
     <div className='container' >
      {
        footcat!=[]?footcat.map((ele)=>{
          return(
            <div key={ele._id} className='row mb-3 my-3'>
            <div key={ele._id} className='fs-3 ms-3 '>{ele.CategoryName}</div>
            <hr/>
            {
              fooddata!=[]?fooddata.filter((item)=>(item.CategoryName===ele.CategoryName)&&(item.name.toLowerCase().includes(search.toLowerCase()))

              )
              .map((filteritems)=>{
                return(
                  <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
                     <Card fooditem={filteritems}
                      options={filteritems.options[0]}
                     
                      
                      
                  /></div>
                )
              }):""
            }

            </div>

          )
        }):""
      }

     
     
      </div>

      <Footer/>

    </div>
  )
}

export default Home
