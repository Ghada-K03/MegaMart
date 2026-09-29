import "./Header.css";
import { MapPin, BadgePercent } from "lucide-react";
import { DeliveryTruck } from "iconoir-react";
function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <div className="leftSide-top-bar-content">
          <p>Welcome to worldwide Megamart!</p>
        </div>

        <div className="rightSide-top-bar-content">
          <p>
            <MapPin size={18} color="#008ECC" /> Deliver to <span>423651</span>
          </p>
          <p>
            <DeliveryTruck size={18} color="#008ECC" /> Track your order
          </p>
          <p>
            <BadgePercent size={18} color="#008ECC" /> All Offers
          </p>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
