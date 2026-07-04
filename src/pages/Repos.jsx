import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRepos } from "../api/githubService";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const data = await getRepos(username);
      setRepos(data);
    };

    fetchRepos();
  }, [username]);

  return (
    <>
      <h1>Repositories</h1>

      {repos.map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>

          <p>{repo.description}</p>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            Open Repository
          </a>

          <hr />
        </div>
      ))}
    </>
  );
};

export default Repos;