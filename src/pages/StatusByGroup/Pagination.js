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
  padding: 0.5rem 0.75rem;
  margin: 0;
  background: #fff;
  color: rgb(25, 25, 25);
  font-size: 1rem;

  &:hover {
    border-bottom: 2px solid #7e94d4;
    cursor: pointer;
  }

  &[disabled] {
    border: none;
    color: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    border: none;
    border-radius: 0.313rem;
    background: #7e94d4;
    color: #fff;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
