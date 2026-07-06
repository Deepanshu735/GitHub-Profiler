import BackLink from "@/components/common/BackLink";

const NotFound = () => {
  return (
    <div className="page-card state-card error-state">
      <p className="eyebrow">Page not found</p>
      <h1>404 - The page you are looking for does not exist.</h1>
      <BackLink to="/">Go back home</BackLink>
    </div>
  );
};

export default NotFound;
