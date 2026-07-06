import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page-card state-card error-state">
      <p className="eyebrow">Page not found</p>
      <h1>404 - The page you are looking for does not exist.</h1>
      <Link to="/" className="back-link">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
