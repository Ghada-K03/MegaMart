import "./Header.css";
import logo from "../../assets/MegaMart-logo.svg";
import { Search, List, User, ShoppingCartMinus } from "lucide-react";
import { MenuScale } from "iconoir-react";
import { Link } from "react-router-dom";
function MainHeader() {
  return (
    <div className="main-header">
      <div className="container main-header-content">
        <div className="logo-side">
          <span>
            <MenuScale className="menu-icon" />
          </span>
          <img src={logo} alt="MegaMart" className="logo-img " />
        </div>

        <div className="header-controls">
          <div className="search-box">
            <div className="search-box-content">
              <div className="search-input">
                <Search color="#008ECC" />
                <input
                  className="input-search-box"
                  placeholder="Search essentials, groceries and more..."
                />
              </div>
              <List color="#008ECC" className="search-box-listicon" />
            </div>
          </div>

          <div className="actions-side">
            <Link to="/login" className="account-link">
              <span className="account">
                <User color="#008ECC" />
                Sign Up/Sign In
              </span>
            </Link>
            <span className="Cart">
              <ShoppingCartMinus color="#008ECC" />
              Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainHeader;
