import { useNavigate, useParams } from "react-router-dom";
import Button from "@/components/common/Button";
import Loader from "@/components/common/Loader";
import ErrorMessage from "@/components/common/ErrorMessage";

import useResourceList from "@/hooks/useResourceList";
import { getFollowers } from "@/api/githubService";
import {
  FollowersPage,
  FollowersGrid,
  FollowerCard,
  Avatar,
  FollowerInfo,
  FollowerLink,
} from "./Followers.styles";

const Followers = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const {
    items: followers,
    loading,
    error,
  } = useResourceList(getFollowers, username);

  if (loading) {
    return (
      <Loader
        title="Loading followers"
        message="Fetching the community around this profile…"
      />
    );
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
    <FollowersPage className="page-card">
      <div className="section-heading">
        <p className="eyebrow">Followers</p>
        <h1>{username}'s community</h1>
        <p>People following this developer.</p>
      </div>

      <FollowersGrid>
        {followers.map((follower) => (
          <FollowerCard key={follower.id}>
            <Avatar src={follower.avatar_url} alt={follower.login} />
            <FollowerInfo>
              <h3>{follower.login}</h3>
              <FollowerLink
                href={follower.html_url}
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </FollowerLink>
            </FollowerInfo>
          </FollowerCard>
        ))}
      </FollowersGrid>

      <div className="profile-actions">
        <Button variant="secondary" onClick={() => navigate(-1)}>
          ← Back
        </Button>
      </div>
    </FollowersPage>
  );
};

export default Followers;
