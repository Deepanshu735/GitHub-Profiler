const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-main">
      <img className="profile-avatar" src={user.avatar_url} alt={user.login} />
      <div className="profile-copy">
        <p className="eyebrow">Developer profile</p>
        <h1>{user.name || user.login}</h1>
        <h2>@{user.login}</h2>
        <p className="bio">
          {user.bio || "This developer has not added a bio yet."}
        </p>
        <div className="stats-grid">
          <div className="stat-pill">
            <strong>{user.followers}</strong>
            <span>Followers</span>
          </div>
          <div className="stat-pill">
            <strong>{user.following}</strong>
            <span>Following</span>
          </div>
          <div className="stat-pill">
            <strong>{user.public_repos}</strong>
            <span>Repos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
