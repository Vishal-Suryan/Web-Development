import { useEffect, useState } from "react";

function CounterEffect(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `Clicked ${count} times`;
    },[count])
    return (
        <div>
            <h1>You Clicked the button {count} times</h1>
            <button onClick={()=>setCount(count + 1)}>Click Me!</button>
        </div>
    )
}

export default CounterEffect;