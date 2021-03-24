import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const MainLayout = ({ children }: { children: any }): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Filip Åhfelt</title>
        <meta name="title" content="Filip Åhfelt" />
        <meta name="description" content="Personal website" />
      </Head>
      <GlobalStyle />
      <main>{children}</main>
      <Footer>Made by Filip Åhfelt © {new Date().getFullYear()}</Footer>
    </>
  );
};

export default MainLayout;

const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background: #e5e9f0;
    overflow-x: hidden;
    color:  #3d405b;
    margin: 0;
    font-family: Cantarell;
  }
`;

const Footer = styled.footer`
  position: fixed;
  display: flex;
  opacity: 0.5;
  flex-direction: row;
  bottom: 0;
  justify-content: center;
  font-size: 0.7rem;
  align-items: baseline;
  width: calc(100% - 20px);
  margin: 10px;
  & a {
    color: inherit;
    text-decoration: none;
  }
`;
