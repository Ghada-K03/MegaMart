import { useEffect, useState } from "react";
import { getCategories } from "../../services/dataService";
import "./Header.css";
import { NavArrowDown } from "iconoir-react";
function CategoriesNav() {
  // const categories = [
  //   "Groceries",
  //   "Premium Fruits",
  //   "Home & Kitchen",
  //   "Fashion",
  //   "Electronics",
  //   "Beauty",
  //   "Home Improvement",
  //   "Sports, Toys & Luggage",
  // ];
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
        if (data.length > 0) {
          setActiveCategoryId(data[0].id);
        }
      } catch {
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);
  return (
    <nav className="categories-nav">
      <div className="container categories-content">
        {loading && <p>Loading categoriesn...</p>}
        {error && <p>{error}</p>}
        {!loading &&
          !error &&
          categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={`category-btn ${activeCategoryId === category.id ? "active" : ""}`}
              onClick={() => setActiveCategoryId(category.id)}
            >
              {category.name}
              <NavArrowDown size={16} />
            </button>
          ))}
      </div>
    </nav>
  );
}
export default CategoriesNav;
