import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleClearCart = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear your cart?",
    );
    if (confirmed) {
      clearCart();
    }
  };

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Browse our products and add items to your cart.</p>
          <Link to="/products" className="browse-btn">
            Browse Products
          </Link>
        </div>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-info">
                <h2>{item.name}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>

                <p>Quantity: {item.quantity}</p>
                <div className="quantity-controls">
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="product-actions">
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>

              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
      <section className="cart-summary">
        <h2>Cart Summary</h2>
        <p>
          <strong>Total: ${total.toFixed(2)}</strong>
        </p>
        <button className="clear-cart-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </section>
      )}
    </main>
  );
};

export default Cart;
