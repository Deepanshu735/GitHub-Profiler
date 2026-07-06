import { useNavigate, useParams } from "react-router-dom";
import Loader from "@/components/common/Loader";
import ErrorMessage from "@/components/common/ErrorMessage";
import useFetchUser from "@/hooks/useFetchUser";
import ProfileHeader from "./components/ProfileHeader";
import ProfileDetails from "./components/ProfileDetails";
import ProfileActions from "./components/ProfileActions";
import "./UserDetail.css";

const UserDetail = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { user, loading, error } = useFetchUser(username);

  if (loading) {
    return (
      <Loader
        title="Loading profile"
        message="Gathering the latest GitHub details…"
      />
    );
  }

  if (error) {
    return (
      <ErrorMessage
        title="Profile unavailable"
        message={error}
        actionLabel="Try another username"
        actionTo="/"
      />
    );
  }

  return (
    <div className="page-card user-detail-page">
      <div className="profile-card">
        <ProfileHeader user={user} />
        <ProfileDetails user={user} />
        <ProfileActions username={username} onBack={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default UserDetail;
