import React, { useState } from 'react';
import image1 from './image1/img1.jpg';

function NewForm() {

          const [login, setLogin]= useState(false)
          
          function Logout(){
             setLogin(true)
          }
  return (

    <>
    <p className="bee">The Daily Weather Update</p>
    <img src={image1} className="cee" alt=""/>
    <form className="Uni">
    { login ===true && <p>Hello User</p>}
    <button> Sign Up </button><br/>
    { login ===false? <p>Please sign up for an account</p>:null}
    <br/>
    <label For="username">Username:</label><br/>
    <input type="text" name="username" className="dee" placeholder="username"/><br/>
    <br/>
    <label For="password">Password:</label><br/>
    <input type="password" name="password" className="dee" placeholder="password"/><br/>
    <br/>
    <button onClick={login}>login</button>
    </form>
    <form className="tee">
    <input type="text" name="country's name" className="wee" placeholder="country's name"/><button>search</button><br/>
    <br/>
    <input type="text" name="temperature display" className="wee" placeholder="temperature display"/>
    </form>

     </>
  );
}

export default NewForm;
