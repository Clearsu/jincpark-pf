import "./NavCircle.css";
import { useState } from "react";

const NavCircle = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="nav-circle">
      <div
        className={`quarter-circle quarter-circle-top-left ${
          hovered && hovered !== "top-left" ? "dimmed" : ""
        }`}
        onMouseEnter={() => setHovered("top-left")}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="quarter-circle-content">Top Left</div>
      </div>
      <div
        className={`quarter-circle quarter-circle-top-right ${
          hovered && hovered !== "top-right" ? "dimmed" : ""
        }`}
        onMouseEnter={() => setHovered("top-right")}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="quarter-circle-content">Top Right</div>
      </div>
      <div
        className={`quarter-circle quarter-circle-bottom-left ${
          hovered && hovered !== "bottom-left" ? "dimmed" : ""
        }`}
        onMouseEnter={() => setHovered("bottom-left")}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="quarter-circle-content">Bottom Left</div>
      </div>
      <div
        className={`quarter-circle quarter-circle-bottom-right ${
          hovered && hovered !== "bottom-right" ? "dimmed" : ""
        }`}
        onMouseEnter={() => setHovered("bottom-right")}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="quarter-circle-content">Bottom Right</div>
      </div>
    </div>
  );
};

export default NavCircle;
