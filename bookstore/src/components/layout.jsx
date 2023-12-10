import NavBar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar variant="tabs" />
      <div className="containerStyle">{children}</div>
    </div>
  );
}
