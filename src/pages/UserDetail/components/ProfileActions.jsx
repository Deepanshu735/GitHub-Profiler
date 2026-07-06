import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "@/components/common/Button";

const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const NavButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 16px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  transition: box-shadow 180ms ease, transform 180ms ease;

  &.secondary {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  &.active {
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
  }
`;

const ProfileActions = ({ username, onBack }) => {
  return (
    <Actions>
      <Button variant="secondary" onClick={onBack}>
        ← Back
      </Button>

      <NavButton
        to={`/user/${username}/repos`}
        className={({ isActive }) => (isActive ? "active" : "")}
        end
      >
        Repositories
      </NavButton>

      <NavButton
        to={`/user/${username}/followers`}
        className={({ isActive }) => (isActive ? "secondary active" : "secondary")}
        end
      >
        Followers
      </NavButton>
    </Actions>
  );
};

export default ProfileActions;
