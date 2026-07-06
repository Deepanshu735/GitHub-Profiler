import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <Link to="/" className="brand">
        <div className="brand-mark">GH</div>
        <div>
          <h1>GitHub Profiler</h1>
          <p>Discover developers at a glance</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
