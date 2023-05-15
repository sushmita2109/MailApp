import { Link } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "8px",
        flexWrap: "wrap",
      }}
    >
      <Link style={{ color: "black" }} to="/">
        Inbox
      </Link>
      <Link style={{ color: "black" }} to="/spam">
        Spam
      </Link>
      <Link style={{ color: "black" }} to="/trash">
        Trash
      </Link>
    </div>
  );
};
