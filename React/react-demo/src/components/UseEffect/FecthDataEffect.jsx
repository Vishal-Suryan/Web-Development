import { useEffect, useState } from "react";

function FetchDataEffect(){
    const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((response)=>{
    //         if(!response.ok){
    //             throw new Error("Network response was not ok");
    //         }
    //         return response.json();
    //     })
    //     .then((data)=>{
    //         setData(data);
    //         setLoading(false);
    //     })
    //     .catch((error)=>{
    //         setError(error.message);
    //         setLoading(false);
    //     });
    // },[]);
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            setData(data);
        }
        fetchData();
    },[])

    // if(loading) return <div>Loading...</div>
    // if(error) return <div>Error: {error}</div>

    return (
        <div>
            <h2>Fetched Data:</h2>
            {/* {data.map((obj, idx)=>(
                <ul key={idx}>
                    <li><h3 >{obj.title}</h3></li>
                    <br />
                </ul>
            ))} */}
            {
                data && <h2>{data[0].title}</h2>
            }
        </div>
    )
}

export default FetchDataEffect;