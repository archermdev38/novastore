import './productCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p className="product-description">{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Stock: {product.stock}</p>
      <Link className="btn" to={`/products/${product.id}`}>
        View details
      </Link>
    </article>
  )
}

export default ProductCard