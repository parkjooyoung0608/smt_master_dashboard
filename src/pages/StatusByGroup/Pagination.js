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
  font-family: "Courier Prime", monospace;
  color: rgb(25, 25, 25);
  font-size: 1rem;

  &:hover {
    border-bottom: 2px solid rgb(25, 25, 25);
    cursor: pointer;
  }

  &[disabled] {
    border: none;
    color: rgb(228, 226, 226);
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    border: none;
    border-radius: 0.313rem;
    background: rgb(228, 226, 226);
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
