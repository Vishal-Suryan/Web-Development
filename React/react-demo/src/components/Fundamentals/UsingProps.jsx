function UsingProps(){
    return (
        <User 
            name="Rock"
            age={22}
            isMarried={false}
            hobbies={["coding", "Gaming"]}
        />
    )
}

const User = (props)=>{
    return <section>
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h3>Is married: {props.isMarried ? "Yes" : "No"}</h3>
        <h4>Hobbies: {props.hobbies.join(", ")}</h4>
    </section>
}

export default UsingProps;