import styled from "styled-components";

export const FollowersPage = styled.div`
  display: grid;
  gap: 20px;
`;

export const FollowersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const FollowerCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  object-fit: cover;
  border: 2px solid rgba(125, 211, 252, 0.25);
`;

export const FollowerInfo = styled.div`
  h3 {
    margin: 0 0 6px;
  }
`;

export const FollowerLink = styled.a`
  color: #7dd3fc;
  font-weight: 600;
`;
