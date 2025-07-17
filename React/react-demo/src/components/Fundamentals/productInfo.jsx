function ProductInfo(){
    const product = {
        name: "Laptop",
        price: "$1200",
        avaibility: "In stock"
    };
    return (
        <div>
            name : {product.name}
            <br />
            price : {product.price}
            <br />
            avaibility : {product.avaibility}
        </div>
    )
}

export default ProductInfo;