import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFollowers } from "../api/githubService";

const Followers = () => {
  const { username } = useParams();

  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const data = await getFollowers(username);
        setFollowers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, [username]);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Followers</h1>

      {followers.map((follower) => (
        <div key={follower.id}>
          <img
            src={follower.avatar_url}
            alt={follower.login}
            width="80"
          />

          <h3>{follower.login}</h3>

          <a
            href={follower.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Followers;