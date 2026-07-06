import { useNavigate, useParams, Link } from "react-router-dom";
import Loader from "@/components/common/Loader";
import ErrorMessage from "@/components/common/ErrorMessage";
import useResourceList from "@/hooks/useResourceList";
import { getFollowers } from "@/api/githubService";
import "./Followers.css";

const Followers = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { items: followers, loading, error } = useResourceList(getFollowers, username);

  if (loading) {
    return <Loader title="Loading followers" message="Fetching the community around this profile…" />;
  }

  if (error) {
    return (
      <ErrorMessage
        title="Followers unavailable"
        message={error}
        actionLabel="Back to profile"
        actionTo={`/user/${username}`}
      />
    );
  }

  return (
    <div className="page-card followers-page">
      <div className="section-heading">
        <p className="eyebrow">Followers</p>
        <h1>{username}'s community</h1>
        <p>People following this developer.</p>
      </div>

      <div className="followers-grid">
        {followers.map((follower) => (
          <div key={follower.id} className="follower-card">
            <img className="follower-avatar" src={follower.avatar_url} alt={follower.login} />
            <div className="follower-info">
              <h3>{follower.login}</h3>
              <a className="follower-link" href={follower.html_url} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
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

export default Followers;
