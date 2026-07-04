import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../api/githubService";

const UserDetail = () => {
  const { username } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser(username);
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>GitHub User Profile</h1>

      <img
        src={user.avatar_url}
        alt={user.login}
        width="150"
      />

      <h2>{user.name}</h2>

      <h3>@{user.login}</h3>

      <p>{user.bio}</p>

      <p>
        <strong>Followers:</strong> {user.followers}
      </p>

      <p>
        <strong>Following:</strong> {user.following}
      </p>

      <p>
        <strong>Public Repositories:</strong> {user.public_repos}
      </p>

      <p>
        <strong>Location:</strong> {user.location || "Not Available"}
      </p>

      <p>
        <strong>Company:</strong> {user.company || "Not Available"}
      </p>

      <p>
        <strong>Blog:</strong>{" "}
        {user.blog ? (
          <a
            href={user.blog}
            target="_blank"
            rel="noreferrer"
          >
            {user.blog}
          </a>
        ) : (
          "Not Available"
        )}
      </p>

      <hr />

      <Link to={`/user/${username}/repos`}>
        <button>Repositories</button>
      </Link>

      {"  "}

      <Link to={`/user/${username}/followers`}>
        <button>Followers</button>
      </Link>
    </div>
  );
};

export default UserDetail;