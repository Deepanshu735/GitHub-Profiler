const ProfileDetails = ({ user }) => {
  return (
    <div className="profile-details">
      <div className="detail-item">
        <span>Location</span>
        <strong>{user.location || "Not Available"}</strong>
      </div>
      <div className="detail-item">
        <span>Company</span>
        <strong>{user.company || "Not Available"}</strong>
      </div>
      <div className="detail-item">
        <span>Website</span>
        {user.blog ? (
          <a href={user.blog} target="_blank" rel="noreferrer">
            {user.blog}
          </a>
        ) : (
          <strong>Not Available</strong>
        )}
      </div>
      <div className="detail-item">
        <span>GitHub</span>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          Visit profile
        </a>
      </div>
    </div>
  );
};

export default ProfileDetails;
