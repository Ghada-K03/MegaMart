import "./Header.css";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import CategoriesNav from "./CategoriesNav";
function Header() {
  return (
    <header className="header">
      {/* Top Bar*/}
      <TopBar />
      {/* Main Header */}
      <MainHeader />
      {/* CategoriesNav */}
      <CategoriesNav />
    </header>
  );
}
export default Header;
