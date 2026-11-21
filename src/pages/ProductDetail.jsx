import { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../context/CartContext";

import { useParams } from "react-router-dom";

import { products } from "../data/products";

import "./productDetail.css"

const ProductDetail = () => {
  const [showMessage, setShowMessage] = useState(false);
  const timeRef = useRef(null);

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main>
        <h1>Product not found</h1>
      </main>
    );
  }

  const handleAddToCart = () => {
    clearTimeout(timeRef.current);
    addToCart(product);
    setShowMessage(true);
    timeRef.current = setTimeout(() => setShowMessage(false), 3000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeRef.current);
    };
  }, []);

  return (
    <main>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {showMessage && <p className="success-message">Item added to cart!</p>}
    </main>
  );
};

export default ProductDetail;
