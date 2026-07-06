import styled from "styled-components";
import { media } from "@/styles/media";

export const SearchPageContainer = styled.div`
  width: min(1100px, 100%);
  padding: 32px;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(17, 24, 39, 0.8);
  box-shadow: 0 30px 70px rgba(2, 8, 23, 0.4);
  backdrop-filter: blur(18px);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: center;

  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div``;

export const Eyebrow = styled.p`
  display: inline-block;
  margin: 0 0 8px;
  color: #7dd3fc;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.78rem;
  font-weight: 700;
`;

export const HeroTitle = styled.h1`
  margin: 0 0 12px;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
`;

export const HeroText = styled.p`
  margin: 0 0 16px;
  font-size: 1rem;
  color: rgba(248, 250, 252, 0.76);
`;

export const Highlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const HighlightChip = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.12);
  color: #bae6fd;
  font-size: 0.92rem;
  border: 1px solid rgba(56, 189, 248, 0.2);
`;
