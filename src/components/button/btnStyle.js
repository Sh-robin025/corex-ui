import styled from "styled-components";

export const BasicBtn = styled.button`
  border: none;
  outline: none;
  padding: ${({ size }) => {
    if (size === "sm") return "8px 24px";
    if (size === "md") return "12px 30px";
    if (size === "lg") return "16px 36px";
  }};
  letter-spacing: 1px;
  font-weight: bold;
  color: ${({ labelColor }) => labelColor};
  background: ${({ background }) => background};
  cursor: pointer;
`;
