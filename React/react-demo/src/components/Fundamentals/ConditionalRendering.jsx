const ValidPassword = function ValidPassword(){
    return <h1>Valid Password</h1>
}

const InvalidPassword = function InvalidPassword(){
    return <h1>Invalid Passowrd</h1>
}

const Password = ({isValid}) =>{
    // if(isValid){
    //     return <ValidPassword />
    // }
    // return <InvalidPassword />
    return (isValid) ? <ValidPassword/> : <InvalidPassword />
}

function ConditionalRendering(){
    return (
        <section>
        <Password isValid= {false} />
        </section>
    )
}

export default ConditionalRendering;