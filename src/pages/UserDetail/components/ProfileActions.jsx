import { NavLink } from "react-router-dom";
import Button from "@/components/common/Button";

const ProfileActions = ({ username, onBack }) => {
  return (
    <div className="profile-actions">
      <Button className="action-btn secondary" onClick={onBack}>
        ← Back
      </Button>
      <NavLink
        className={({ isActive }) => (isActive ? "action-btn active" : "action-btn")}
        to={`/user/${username}/repos`}
        end
      >
        Repositories
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "action-btn secondary active" : "action-btn secondary"
        }
        to={`/user/${username}/followers`}
        end
      >
        Followers
      </NavLink>
    </div>
  );
};

export default ProfileActions;
