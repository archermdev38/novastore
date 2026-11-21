import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

import "./products.css";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [...new Set(products.map((product) => product.category))]
    .sort((a, b) => a.localeCompare(b));

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedCategory === "all" || product.category.toLowerCase() === selectedCategory)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "ascending") return a.name.localeCompare(b.name);
    if (sortBy === "descending") return b.name.localeCompare(a.name);
    return 0;
  });

  const handleResetFilters = () =>{
    setSearchTerm("");
    setSortBy("default");
    setSelectedCategory("all");
  }

  return (
    <main>
      <input className="form-control" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <select className="form-control" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category.toLowerCase()}>
            {category}
          </option>
        ))}
      </select>
      <select className="form-control" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="default">Sort by</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="ascending">Name: A to Z</option>
        <option value="descending">Name: Z to A</option>
      </select>
      <button className="btn btn-secondary" onClick={handleResetFilters}>
        Reset Filters
      </button>
      <h1>Our products</h1>
      <section className="products-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-products">No products found.</p>
        ) : (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </section>
    </main>
  );
};

export default Products;
