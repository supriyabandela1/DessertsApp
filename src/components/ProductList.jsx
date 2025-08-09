import React from 'react'
import ProductCard from './ProductCard';

const ProductList = ({products, cartItems, onAddToCart, onIncrease, onDecrease}) => {
  return (
    <div className="product-list">
        {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              cartItems={cartItems}
              onAddToCart={onAddToCart}
               onIncrease={onIncrease}
               onDecrease={onDecrease}
              />
        ))}
              </div>
  );
};

export default ProductList;