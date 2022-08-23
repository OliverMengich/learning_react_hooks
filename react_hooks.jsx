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
const App = () => {
  
  const [windowWidth,setwindowWidth] = useState(window.width);
  const [userName,setUserName] = useState('Coder');
  const [txt,setTxt] = useState('');
  //on every single render
  useEffect(()=>{
    // window.addEventListener('resize',updateWindow);
    setUserName('Coder and Programmer');
  })
  //on first Render only(componentDidmount)
  //react runs this on the first render
  useEffect(()=>{
    setUserName('Programmer only')
  },[])
  //component did update
  //on first render + component updating
  
  useEffect(()=>{
    console.log(txt);
    return ()=>{
      console.log('We unmounted');
    }
  },[txt])
  //component will unmount
  useEffect(()=>{
    window.addEventListener('resize',updateWindow);
    return () =>{
      window.removeEventListener('resize',updateWindow)
    }
  },[])
  const updateWindow = ()=>{
    setwindowWidth(window.width);
  }
  return(
    <div >
      <h1>{userName}</h1>
      <h2>{txt}</h2>
      <input type='text' value={userName} onChange={(e)=>setTxt(e.target.value)} />
    </div>
  );
}

const AppUseEffect = () =>{
ReactDOM.render(<App />,
document.getElementById("root"))