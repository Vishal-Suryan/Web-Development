import TextInputForm from './TextInputForm'
import { useState } from 'react';

function TextInputFormContainer(){
    const [inputType, setInputType]= useState("password");

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted")
    }

    function handleTextInputChange(event){
        console.log("Text Input Changed");
        console.log(event.target.value);
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