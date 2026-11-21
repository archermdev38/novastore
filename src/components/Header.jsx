import './header.css'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import { Link } from 'react-router-dom';

const Header = () => {
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className='header'>
      <nav className='nav'>
        <h3 className='title'>Nova Store</h3>
        <div className='enlaces'>
          <Link className='home' to="/">
            Home
          </Link>
          <Link className='products' to="/products">
            Products
          </Link>
          <Link className='cart' to="/cart">
            Cart <span className='cart-count'>{cartCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
