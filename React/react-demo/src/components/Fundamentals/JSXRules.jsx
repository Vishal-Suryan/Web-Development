function JSXRules(){
    const myName = "Rockstar";
    const multiply = (a,b)=>{
        return a*b;
    }
    const specialClass = "simple-class";
    return (
        <div>
            <h1>JSX Rules</h1>
            <ol>
                <li>JSX must return a single parent</li>
                <li>JSX elements must be properly closed</li>
                <li>JSX attributes are written using camelCase(eg. className instead of class)</li>
            </ol>
            <section>
                <p>2 + 2 = {2+2}</p>
                <h1>{myName}</h1>
                <p>My Friends List: {["A", "B"]} </p>
                <p>2 * 2 = {multiply(2,2)} </p>
                <p className={specialClass}>This is a class</p>
            </section>
        </div>
    )
}

export default JSXRules;