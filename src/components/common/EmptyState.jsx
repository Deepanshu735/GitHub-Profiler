const EmptyState = ({ title, message }) => {
  return (
    <div className="page-card state-card">
      <p className="eyebrow">{title}</p>
      <h2>{message}</h2>
    </div>
  );
};

export default EmptyState;
