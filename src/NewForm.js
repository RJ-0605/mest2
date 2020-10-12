import React from 'react';

function NewForm() {
  return (

    <>
    <form className="Uni">
    <button> Sign Up </button><br/>
    <br/>
    <label For="username">Username:</label><br/>
    <input type="text" name="username" placeholder="username"/><br/>
    <br/>
    <label For="password">Password:</label><br/>
    <input type="password" name="password" placeholder="password"/><br/>
    <br/>
    <button className="pee">Login</button>
    </form>
    <form className="tee">
    <input type="text" name="country's name" placeholder="country's name"/><button>search</button><br/>
    <br/>
    <input type="text" name="temperature display" placeholder="temperature display"/>
    </form>

     </>
  );
}

export default NewForm;
