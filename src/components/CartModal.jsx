import React from 'react';

const CartModal = ({ cartItems, totalAmount, onConfirm, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order Confirmed!</h2>
        <p>We hope you enjoyed your food.</p>

        <h3>Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</h3>

        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={item.imageUrl || "fallback.jpg"}
                  alt={item.name}
                  style={{ width: '50px', height: 'auto', marginRight: '10px', borderRadius: '5px' }}
                />
                <span>
                  {item.name} {item.quantity}x @ ${item.price.toFixed(2)}
                </span>
              </div>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          ))}
        </div>

        <hr />

        <h3>Order Total: ${totalAmount.toFixed(2)}</h3>

        <div style={{ marginTop: '20px' }}>
          <button onClick={onConfirm} style={{ marginRight: '10px' }}>Start New Order</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
