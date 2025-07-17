import { useState } from "react";

function TodoList(){
    const [todoArray, setTodoArray] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const clickHandler = ()=>{
        if(inputValue.trim() !== ""){
            setTodoArray([...todoArray, inputValue]);
            setInputValue("");
        }
    }
    return (
        <div>
            <h1>Todo List -</h1>
            <ol>
                {todoArray.map((todo, idx)=>(                  
                    <li key={idx}> {todo} </li>     
                ))}
            </ol>
            <input 
            type="text" 
            placeholder="write todo"
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}
            />
            <button onClick={clickHandler}>Add Todo</button>
        </div>
    )
}

export default TodoList;