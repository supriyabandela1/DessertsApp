import React from 'react'

const ProductCard = ({product, onAddToCart, cartItems, onIncrease, onDecrease}) => {
    if(!product) return null; // Ensure product is defined before rendering
    const cartItem=cartItems.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;
  return (
    <div className ="product-card">
        <img src={product.imageUrl || "fallback.jpg"} alt={product.name} style={{width:'150px', height:'auto'}}/>
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      {quantity ===0?( <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
        <img src="assets/images/icon-add-to-cart.svg" alt="cart icon" className="cart-icon" />
        <span>Add to Cart</span></button>):
      (
        <div>
            <button onClick={() => onIncrease(product.id)}>+</button>
            <span style={{margin:'0 10px'}}>{quantity}</span>
            <button onClick={() => onDecrease(product.id)}>-</button>
        </div>
      )}
     
    </div>
  );
};


export default ProductCard;