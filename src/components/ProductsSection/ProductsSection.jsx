import { useState, useEffect } from "react";
import { getProducts } from "../../services/dataService";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsSection.css";
import { FiChevronRight } from "react-icons/fi";
function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      // setError(null);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="products-section">
      <div className="container">
        <div className="products-section-header">
          <h2 className="products-section-title">
            Grab the best deal on <span>Smartphones</span>
          </h2>
          <button className="view-all-button">
            View All <FiChevronRight />
          </button>
        </div>
        {loading && <p>Loading products...</p>}
        {error && <p>{error}</p>}
        <div className="products-grid">
          {!loading &&
            !error &&
            [...products]
              .filter((product) => product.stock_qty > 0)
              .sort((a, b) => a.stock_qty - b.stock_qty)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
}
export default ProductsSection;
