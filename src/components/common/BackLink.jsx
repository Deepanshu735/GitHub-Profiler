import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBackLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 10px 16px;
  border-radius: 999px;
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  color: #fff;
  font-weight: 600;
`;

export default StyledBackLink;
