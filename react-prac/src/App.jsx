import {useState, useEffect} from 'react';
import Button from './components/Button'; //importing Button component
//Component alwaays returns jsx
//jsx is a syntax extension for javascript
//jsx is used with react to describe what the UI should look like
//jsx produces react elements
//react elements are used to construct and update the DOM
//react elements are plain objects and are cheap to create
//single rootedjsx is returned from a component

//hooks are functions that let you use state and other features in functional components
//always starts with use
//can only be used inside functional components or custom hooks
//useState is a hook that lets you add state to your functional components,useState returns an array with two elements
//useEffect is a hook that lets you perform side effects in your functional components,useEffect takes a function that contains imperative synchronous code

const App =() => {
  const [count, setCount] = useState(0);
  // const count = hi[0];
  // const setCount = hi[1];
  useEffect(()=>{
    console.log("useEffect");
  },[count]
);
  return (
    <>
    <div>
    <h1 >hello world</h1>
    <p>count:{count}</p>
    <Button text="khatra" 
    onClick={()=>{setCount(count+1);}}

    isDisabled={false}/>
    </div>
    </>
  );
}


export default App;
