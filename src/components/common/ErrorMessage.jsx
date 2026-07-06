import BackLink from "@/components/common/BackLink";

const ErrorMessage = ({ title, message, actionLabel, actionTo }) => {
  return (
    <div className="page-card state-card error-state">
      <p className="eyebrow">{title}</p>
      <h2>{message}</h2>
      {actionTo ? <BackLink to={actionTo}>{actionLabel}</BackLink> : null}
    </div>
  );
};

export default ErrorMessage;
