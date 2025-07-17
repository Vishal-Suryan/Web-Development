function MapObject(){
    const userInfo = [
        {
            id: 1,
            name: "Alex",
            age: 19,
            email: "alex@gmail.com",
            country: "USA"
        },
        {
            id: 2,
            name: "John",
            age: 19,
            email: "john@gmail.com",
            country: "India"
        },
        {
            id: 3,
            name: "Jack",
            age: 19,
            email: "jack@gmail.com",
            country: "Arab"
        }
    ]

    return (
        <main>
            <div>
                {userInfo.map(({name, email, country}) =>(
                    <ul key={Math.random()}>
                        <li>{name}</li>
                        <li>{email}</li>
                        <li>{country}</li>
                    </ul>
                ))}
            </div>
            <div>
                {userInfo.map(({id, name, age})=>(
                    <div key={id}>
                        <h2>{name}:{age}</h2>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default MapObject;