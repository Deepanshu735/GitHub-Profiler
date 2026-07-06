import styled from "styled-components";
import { media } from "@/styles/media";

export const SearchPanel = styled.div`
  padding: 24px;
  border-radius: 24px;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const SearchLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const SearchInputGroup = styled.div`
  display: flex;
  gap: 10px;

  ${media.mobile} {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 13px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(2, 8, 23, 0.65);
  color: #fff;
  outline: none;

  &:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.22);
  }
`;
