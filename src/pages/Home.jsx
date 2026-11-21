import "./home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="hero">
      <h1 className="hero-title">Welcome to Nova Store</h1>
      <p className="hero-description">
        Explore our wide selection of products.
      </p>
      <Link className="btn" to="/products">
        View products
      </Link>
    </main>
  );
};

export default Home;
