function Greeting(){
    const greetingMessage = "Hi, How are You?";
    const date = new Date();
    const name = "Rockstar";
    const numbers = [1,2,3,4,5];
    return (
        <div>
            <h1>
                {greetingMessage}
            </h1>
            <p>
                {name} Date :{date.getDate()}
            </p>
            <div>
                { numbers.map((number)=>(
                    <ul key={number}> 
                        <li>{number}</li>
                    </ul>
                )) }
            </div>
        </div>
    )
}

export default Greeting;