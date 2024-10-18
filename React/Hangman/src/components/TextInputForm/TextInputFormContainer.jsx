import { useNavigate } from 'react-router-dom';
import TextInputForm from './TextInputForm'
import { useState } from 'react';

function TextInputFormContainer(){
    const [inputType, setInputType]= useState("password");
    const [value, setValue] = useState("");

    const navigate=useNavigate();

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted",value);
        if(value){
            navigate(`/play`, {state: {wordSelected: value}});
        }
    }

    function handleTextInputChange(event){
        console.log("Text Input Changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick(){
        console.log("Show/Hide Button Clicked")
        if(inputType==="password"){
            setInputType("text");
        }else{
            setInputType("password");
        }
    }

    return(
        <>
            <TextInputForm
                inputType={inputType}
                handleFormSubmit={handleFormSubmit}
                handleTextInputChange={handleTextInputChange}
                handleShowHideClick={handleShowHideClick}
            />
        </>
    )
}

export default TextInputFormContainer;