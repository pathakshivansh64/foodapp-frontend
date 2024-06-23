import React from 'react'


function Craousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{objectFit:"contain !important"}} >
 
  <div className="carousel-inner" id='carousel' >
    <div className="carousel-caption" style={{zIndex:"10"}}>
    <form className="d-flex" role="search">
      <input className="form-control me-2 text-green" style={{filter:"brightness(90%)"}} type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active " >
      <img className="d-block w-100 " src="https://source.unsplash.com/random/?pizza"  style={{filter:"brightness(30%)"}} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/?burger" style={{filter:"brightness(30%)"}} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/?pasta" style={{filter:"brightness(30%)"}} alt="Third slide"/>
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
  )
}

export default Craousel
