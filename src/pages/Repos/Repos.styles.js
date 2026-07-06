import styled from "styled-components";

export const ReposPage = styled.div`
  display: grid;
  gap: 22px;
`;

export const SectionHeading = styled.div`
  .eyebrow {
    margin: 0 0 6px;
    font-size: 0.9rem;
    opacity: 0.9;
  }

  h1 {
    margin: 0 0 6px;
    font-size: 1.7rem;
  }

  p {
    margin: 0;
    color: rgba(248, 250, 252, 0.74);
  }
`;

export const ReposGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const RepoCard = styled.div`
  padding: 18px;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  gap: 10px;
`;

export const RepoTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.05rem;
  }
`;

export const RepoLanguage = styled.span`
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.14);
  color: #bae6fd;
  font-size: 0.8rem;
`;

export const RepoMeta = styled.div`
  display: flex;
  gap: 12px;
  color: rgba(248, 250, 252, 0.72);
  font-size: 0.9rem;
`;

export const RepoLink = styled.a`
  color: #7dd3fc;
  font-weight: 600;
`;

export const ProfileActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
