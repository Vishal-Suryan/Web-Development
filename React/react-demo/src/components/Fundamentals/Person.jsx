// function Data(){
//     return (
//         <Person 
//             name= "Rock"
//             age= {22}
//         />
//     ) 
// }
// function Person(props){
//     return (
//         <main>
//             <h1>Name : {props.name}</h1>
//             <h1>Age : {props.age}</h1>
//         </main>
//     )
// }


// export default Data;

function Person(props){
    return (
        <main>
            <h1>Name : {props.name}</h1>
            <h1>Age : {props.age}</h1>
        </main>
    )
}

export default Person;