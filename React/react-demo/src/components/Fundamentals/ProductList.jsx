function ProductList(){
    const products = [
        {id:1, name: "Phone", price: "$699"},
        {id:2, name: "Laptop", price: "$899"},
        {id:3, name: "Headphones", price: "$199"}
    ];

    return (
        <div>
            {products.map(({id, name, price})=>(
                <div key={id}>
                    <h2>{name} : {price}</h2>
                </div>
            ))}
        </div>
    )
}

export default ProductList;