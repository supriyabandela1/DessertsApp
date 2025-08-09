import React from 'react'

const Cart = ({ cartItems, onRemoveItem, onConfirmOrder }) => {
  const orderTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <span className="item-name">{item.name}</span>
            <span>{item.quantity}x @ ${item.price.toFixed(2)}</span>
            <span className="item-total">${(item.quantity * item.price).toFixed(2)}</span>
            <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>✕</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <hr />
          <div className="order-total">
            <strong>Order Total:</strong> ${orderTotal.toFixed(2)}
          </div>
          <button className="confirm-btn" onClick={onConfirmOrder}>Confirm Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;