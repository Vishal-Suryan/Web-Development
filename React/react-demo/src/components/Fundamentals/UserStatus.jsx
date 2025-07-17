function UserStatus({loggedIn, isAdmin}){
    if(loggedIn && isAdmin){
        return <h1> Welcome Admin ! <Greeting timeOfDay={"morning"} />  </h1>
    }else if(loggedIn && !isAdmin){
        return <h1>Welcome User ! <Greeting timeOfDay={"evening"} /></h1>
    }
    return <div></div>
}

function Greeting({timeOfDay}){
    if(timeOfDay == "morning"){
        return <h1> Good Morning.</h1>
    }else if(timeOfDay == "afternoon"){
        return <h1> Good Afternoon.</h1>
    }else{
        return <h1> Good evening.</h1>
    }
}
export default UserStatus;