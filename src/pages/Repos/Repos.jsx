import { useNavigate, useParams, Link } from "react-router-dom";
import Loader from "@/components/common/Loader";
import ErrorMessage from "@/components/common/ErrorMessage";
import useResourceList from "@/hooks/useResourceList";
import { getRepos } from "@/api/githubService";
import "./Repos.css";

const Repos = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { items: repos, loading, error } = useResourceList(getRepos, username);

  if (loading) {
    return <Loader title="Loading repositories" message="Fetching the latest project list…" />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Repositories unavailable"
        message={error}
        actionLabel="Back to profile"
        actionTo={`/user/${username}`}
      />
    );
  }

  return (
    <div className="page-card repos-page">
      <div className="section-heading">
        <p className="eyebrow">Repositories</p>
        <h1>{username}'s projects</h1>
        <p>Browse public repositories and open them directly on GitHub.</p>
      </div>

      <div className="repos-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <div className="repo-top">
              <h3>{repo.name}</h3>
              {repo.language ? <span className="repo-language">{repo.language}</span> : null}
            </div>
            <p>{repo.description || "No description provided."}</p>
            <div className="repo-meta">
              <span>★ {repo.stargazers_count}</span>
              <span>⤴ {repo.forks_count}</span>
            </div>
            <a className="repo-link" href={repo.html_url} target="_blank" rel="noreferrer">
              Open Repository
            </a>
          </div>
        ))}
      </div>

      <div className="profile-actions">
        <button className="action-btn secondary" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <Link to={`/user/${username}`} className="back-link">
          Back to profile
        </Link>
      </div>
    </div>
  );
};

export default Repos;
