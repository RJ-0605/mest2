import React, { useState } from 'react';

function Counter() {

    const [count,setcount]= useState(0)

    function increment() {
        setcount(count + 1)
    }

    function decrement() {
        setcount(count - 1)
    }

  return (

    <>
     <button onClick={increment}>Increment</button>
     <p>{count}</p>
     <button onClick={decrement}> Decrement</button>
    </>
  );
}

export default Counter;
