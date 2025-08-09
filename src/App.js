import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Cart from './components/Cart';
import CartModal from './components/CartModal';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';


function App() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
    fetch("https://localhost:7202/api/products") // Replace with your Swagger API URL
      .then(res => res.json())
      .then(data => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  
  const handleAddToCart = (product) => {
    setCartItems((prev)=>{
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };
  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  };
  const handleIncrease = (productId) => {
    setCartItems((prev) =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const handleDecrease = (productId) => {
    setCartItems((prev) =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const handleConfirmOrder = () => {
  setShowModal(true); // Only show the modal
  // Do NOT clear cartItems here
};

const handleStartNewOrder = () => {
  setCartItems([]);     // Clear cart only here
  setShowModal(false);  // Close modal
};

  return (
    <div className="App">
      <Header />
      <h1 className="main-heading">Delicious Desserts Menu</h1>
    <div className="main-layout">
  <div className="product-section">
    <ProductList
      products={products}
      onAddToCart={handleAddToCart}
      cartItems={cartItems}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  </div>

  <div className="cart-section">
    <Cart
      cartItems={cartItems}
      onRemoveItem={handleRemoveItem}
      onConfirmOrder={handleConfirmOrder}
    />
  </div>
</div>
      {showModal && (
        <CartModal
             cartItems={cartItems}
             totalAmount={cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
  onConfirm={handleStartNewOrder}
  onClose={() => setShowModal(false)}
  />
      )}
      <ProductCard/>
      </div>
  );
}

export default App;
