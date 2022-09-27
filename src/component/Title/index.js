import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return <SectionTitle>{title}</SectionTitle>;
};

export default Title;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
`;
