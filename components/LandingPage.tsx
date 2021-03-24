import styled, { keyframes } from 'styled-components';
import ScrollArrow from './ScrollArrow';

const Title = (): JSX.Element => {
  return (
    <>
      <Container>
        <TitleContainer>
          <Avatar width="460" height="460" src="/img/avatar.webp" alt="Filip" />
          <Name>Filip Åhfelt</Name>
        </TitleContainer>
        <DescContainer>
          <p>
            M.Sc. Student at Faculty of Engineering LTH. To keep in touch,
            simply&nbsp;
            <StyledLink href="mailto:filahf94@gmail.com">email</StyledLink> or
            add me on&nbsp;
            <StyledLink
              href="https://www.linkedin.com/in/filip-ahfelt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </StyledLink>
            .
          </p>
        </DescContainer>
        <ScrollArrow />
      </Container>
    </>
  );
};

export default Title;
const fadein = keyframes`
  from { opacity: 0; }
    to   { opacity: 1; }
`;
const Container = styled.div`
  margin: 0;
  margin-top: 8rem;
  padding: 0;
  width: 100%;
  max-width: 660px;
  animation: ${fadein} 3s ease;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Name = styled.h1`
  margin: 0 1rem;
  padding: 0;
  white-space: nowrap;
  font-size: 5rem;
  font-weight: 200;
  @media (max-width: 768px) {
    font-size: 3em;
    margin-top: 1rem;
  }
`;

const Avatar = styled.img`
  width: 6em;
  height: 6em;
  flex-shrink: 0;
  border-radius: 50%;
`;

const DescContainer = styled.div`
  margin: 0rem 3rem;
  font-size: 1.3em;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #434c5e;
  cursor: pointer;

  & :hover {
    color: #81b29a;
  }
`;
