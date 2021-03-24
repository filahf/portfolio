import Link from 'next/link';
import styled from 'styled-components';

const ScrollArrow = (): JSX.Element => {
  return (
    <ScrollContainer>
      <Link href="/#projects">
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-down-circle"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#3d405b"
          opacity="0.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="9" />
          <line x1="8" y1="12" x2="12" y2="16" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="16" y1="12" x2="12" y2="16" />
        </StyledSvg>
      </Link>
    </ScrollContainer>
  );
};

export default ScrollArrow;

const ScrollContainer = styled.div`
  padding: 0;
  margin-top: 5rem;
  width: 100%;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSvg = styled.svg`
  cursor: pointer;
`;
