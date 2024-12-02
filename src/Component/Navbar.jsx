// import React from 'react'
// import "../Component/Navbar.css"
// import { useNavigate } from 'react-router-dom'

// function Navbar() {

//     const navigate = useNavigate();

//     const All = () =>{
//         navigate ("/")
//     }

//     const Gaming = () =>{
//         navigate ("/gaming")
//     }

//     const Music = () =>{
//         navigate ("/music")
//     }

//     const oggy = () =>{
//       navigate ("/oggy")
//     }

//     const Thrillers = () =>{
//       navigate ("/Thrillers") 
//     }

//     const Mixes = () =>{
//       navigate ("/Mixes")
//     }

//     const Podcast = () =>{
//       navigate ("/Podcast")
//     }

//     const Live = () =>{
//       navigate ("/Live")
//     }

//     const Financial = () =>{
//       navigate ("/Financial")
//     }

//     const Comic = () =>{
//       navigate ("/Comic")
//     }
    
//   return (
//     <>
//     <div className='button_nav'>
//       <button onClick={All}>All</button>
//       <button onClick={Gaming}>Gaming</button>
//       <button onClick={Music}>Music</button>
//       <button onClick={oggy}>Oggy and the cockoaches</button>
//       <button onClick={Thrillers}>Thrillers</button>
//       <button onClick={Mixes}>Mixes</button>
//       <button onClick={Podcast}>Podcast</button>
//       <button onClick={Live}>Live</button>
//       <button onClick={Financial}>Financial literacy</button>
//       <button onClick={Comic}>Comic books</button>
//       </div>
//     </>
//   )
// }

// export default Navbar;


import React from 'react';
import "../Component/Navbar.css";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  }

  return (
    <div className="navbar">
      <button className="navbar-button" onClick={() => navigateTo("/")}>Home</button>
      <button className="navbar-button" onClick={() => navigateTo("/gaming")}>Gaming</button>
      <button className="navbar-button" onClick={() => navigateTo("/music")}>Music</button>
      <button className="navbar-button" onClick={() => navigateTo("/oggy")}>Oggy and the Cockroaches</button>
      <button className="navbar-button" onClick={() => navigateTo("/Thrillers")}>Thrillers</button>
      <button className="navbar-button" onClick={() => navigateTo("/Mixes")}>Mixes</button>
      <button className="navbar-button" onClick={() => navigateTo("/Podcast")}>Podcast</button>
      <button className="navbar-button" onClick={() => navigateTo("/Live")}>Live</button>
      <button className="navbar-button" onClick={() => navigateTo("/Financial")}>Financial Literacy</button>
      <button className="navbar-button" onClick={() => navigateTo("/Comic")}>Comic Books</button>
    </div>
  );
}

export default Navbar;

