const Loader = ({ title = "Loading", message = "Please wait while the content loads." }) => {
  return (
    <div className="page-card state-card">
      <p className="eyebrow">{title}</p>
      <h2>{message}</h2>
    </div>
  );
};

export default Loader;
