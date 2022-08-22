import React, { useRef,useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const App = () => {
  const [count,setCount] = useState(0);
  const increment = ()=>{
    setCount(count +1)
  }
  const decrement = ()=>{
    setCount(count-1);
  }
  return(
    <div>
      <h1>Hello world</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>Count is: {count}</h1>
    </div>
  );
}

const AppUseEffect = () =>{
ReactDOM.render(<App />,
document.getElementById("root"))