import { useNavigate, useParams } from "react-router-dom";
import Button from "@/components/common/Button";
import Loader from "@/components/common/Loader";
import ErrorMessage from "@/components/common/ErrorMessage";

import useResourceList from "@/hooks/useResourceList";
import { getRepos } from "@/api/githubService";
import {
  ReposPage,
  SectionHeading,
  ReposGrid,
  RepoCard,
  RepoTop,
  RepoLanguage,
  RepoMeta,
  RepoLink,
  ProfileActions,
} from "./Repos.styles";

const Repos = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { items: repos, loading, error } = useResourceList(getRepos, username);

  if (loading) {
    return (
      <Loader
        title="Loading repositories"
        message="Fetching the latest project list…"
      />
    );
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
    <ReposPage className="page-card">
      <SectionHeading>
        <p className="eyebrow">Repositories</p>
        <h1>{username}'s projects</h1>
        <p>Browse public repositories and open them directly on GitHub.</p>
      </SectionHeading>

      <ReposGrid>
        {repos.map((repo) => (
          <RepoCard key={repo.id}>
            <RepoTop>
              <h3>{repo.name}</h3>
              {repo.language ? (
                <RepoLanguage>{repo.language}</RepoLanguage>
              ) : null}
            </RepoTop>
            <p>{repo.description || "No description provided."}</p>
            <RepoMeta>
              <span>★ {repo.stargazers_count}</span>
              <span>⤴ {repo.forks_count}</span>
            </RepoMeta>
            <RepoLink href={repo.html_url} target="_blank" rel="noreferrer">
              Open Repository
            </RepoLink>
          </RepoCard>
        ))}
      </ReposGrid>

      <ProfileActions>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          ← Back
        </Button>
      </ProfileActions>
    </ReposPage>
  );
};

export default Repos;
