import { useSelector } from "react-redux"
const CartItems = ()=>{
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);
    return (
        <div>
            {cartItems.length === 0 ? <h1>Cart is EMPTY</h1>:cartItems.map((item,idx)=>{
                   return <h1 key = {idx}>CART</h1>
            })}
          
         
        </div>
    )
}

export default CartItems