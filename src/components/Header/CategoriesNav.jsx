import { useState } from "react";
import "./Header.css";
import { NavArrowDown } from "iconoir-react";
function CategoriesNav() {
  const categories = [
    "Groceries",
    "Premium Fruits",
    "Home & Kitchen",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home Improvement",
    "Sports, Toys & Luggage",
  ];
  const [activeCategory, setActiveCategory] = useState("Groceries");
  return (
    <nav className="categories-nav">
      <div className="container categories-content">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
            <NavArrowDown size={16} />
          </button>
        ))}
      </div>
    </nav>
  );
}
export default CategoriesNav;
