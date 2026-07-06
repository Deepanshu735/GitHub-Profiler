import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: min(1200px, 100%);
  margin: 0 auto 24px;
`;

const BrandLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  backdrop-filter: blur(16px);
  box-shadow: 0 18px 45px rgba(2, 8, 23, 0.35);
`;

const BrandMark = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  color: #fff;
  font-weight: 800;
  box-shadow: 0 12px 24px rgba(56, 189, 248, 0.25);
`;

const BrandTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
`;

const BrandCaption = styled.p`
  margin: 2px 0 0;
  font-size: 0.92rem;
  opacity: 0.78;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <BrandLink to="/">
        <BrandMark>GH</BrandMark>
        <div>
          <BrandTitle>GitHub Profiler</BrandTitle>
          <BrandCaption>Discover developers at a glance</BrandCaption>
        </div>
      </BrandLink>
    </HeaderWrapper>
  );
};

export default Header;
