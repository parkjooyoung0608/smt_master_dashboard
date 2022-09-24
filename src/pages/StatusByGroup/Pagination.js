import React from "react";
import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <Nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin: 1rem;
`;

const Button = styled.button`
  border: none;
  border-radius: 0.313rem;
  padding: 0.5rem 0.75rem;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: #7e94d4;
    cursor: pointer;
    transform: translateY(-0.125rem);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #7e94d4;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
