import { useState } from "react";

function ShoppingList(){
    const [cart, setCart] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const addToCart = ()=>{
        setCart([...cart, {name, quantity}])
        setName("");
        setQuantity("");
    }
    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {cart.map((product, idx) => (
                    <li key={idx}>
                        Name: {product.name}, Quantity: {product.quantity}
                    </li>
                ))}
            </ul>
            <input 
            type="text" placeholder="Product name" 
            value = {name} onChange={(e)=>{setName(e.target.value)}}
            /> 
            <input 
            type="text" placeholder="Quantity" 
            value = {quantity} onChange={(e)=>{setQuantity(e.target.value)}}
            /> 
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ShoppingList;