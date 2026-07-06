import { Link } from "react-router-dom";

const ErrorMessage = ({ title, message, actionLabel, actionTo }) => {
  return (
    <div className="page-card state-card error-state">
      <p className="eyebrow">{title}</p>
      <h2>{message}</h2>
      {actionTo ? (
        <Link to={actionTo} className="back-link">
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
};

export default ErrorMessage;
