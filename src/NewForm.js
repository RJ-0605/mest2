import React, { useState } from 'react';
import image1 from './image1/img1.jpg';

function NewForm() {

          const [login, setLogin]= useState(true)
          
          function Logout(){
             setLogin(false)
          }
  return (

    <>
    <p className="bee"><strong>The Daily Weather Update</strong></p>
    <img src={image1} className="cee" alt=""/>
    <form className="Uni">
    { login ===true && <p>Hello User</p>}
    <button> Sign Up </button><br/>
    { login ===false && <p>Please sign up for an account</p>}
    <br/>
    <label For="username">Username:</label><br/>
    <input type="text" name="username" className="dee" placeholder="username"/><br/>
    <br/>
    <label For="password">Password:</label><br/>
    <input type="password" name="password" className="dee" placeholder="password"/><br/>
    <br/>
    <button onClick={Logout}>log out</button>
    </form>
    <form className="tee">
    <input type="text" name="country's name" className="wee" placeholder="country's name"/><button>Get Weather</button><br/>
    <br/>
    <input type="text" name="city's name" className="wee" placeholder="city's name"/>
    </form>

     </>
  );
}

export default NewForm;
