import { useEffect } from "react";

function BasicEffect(){
    useEffect(()=>{
        console.log("Component Mounted");
    },[])
    return (
        <div></div>
    )
}

export default BasicEffect;