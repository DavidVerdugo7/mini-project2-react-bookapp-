import NavBar from "./navbar";
import "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar variant="tabs" />
      <div className="containerStyle">{children}</div>
    </div>
  );
}
