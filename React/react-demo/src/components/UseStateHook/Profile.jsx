import { useState } from "react";

function Profile(){
    const [userInfo, setUserInfo] = useState({
        id: 1, name: "Rock", age: 22
    })
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const updateAge = ()=>{
        if(age.trim() !== ""){
            setUserInfo({...userInfo,age: age});
            setAge("");
        }
    }
    const updateName = ()=>{
        if(name.trim() !== ""){
            setUserInfo({...userInfo,name: name});
            setName("");
        }
    }
    return (
        <div>
            <h1>Name:{userInfo.name}</h1>
            <h2>Age: {userInfo.age}</h2>
            <input 
            type="text" placeholder="write name" 
            value = {name} onChange={(e)=>{setName(e.target.value)}}
            /> 
            <button onClick={updateName}>Edit Name</button>
            <input 
            type="text" placeholder="write age" 
            value = {age} onChange={(e)=>{setAge(e.target.value)}}
            /> 
            <button onClick={updateAge}>Edit Age</button>
        </div>
    )
}

export default Profile;