import React from 'react';

import styled from 'styled-components';

import { GithubLink, DemoLink } from './Icons';

const ProjectsPage = (): JSX.Element => {
  return (
    <Container>
      <StyledSubTitle>Projects</StyledSubTitle>
      <CardContainer>
        <Card>
          <StyledImg
            width="780"
            height="439"
            src="img/wevid.webp"
            style={{ width: '100%', height: 'auto' }}
            alt="Project"
          />
          <ContentContainer>
            <StyledCardTitle>Synchronized Youtube</StyledCardTitle>
            <StyledCardText>
              Synchronized YouTube player that lets friends watch videos
              together regardless of geographic location. Built with React,
              Sockets and Express.
            </StyledCardText>
          </ContentContainer>
          <LinkContainer>
            <DemoLink link={'https://wevid.online/'} />
            <GithubLink
              link={'https://github.com/filahf/wevid-youtube-together'}
            />
          </LinkContainer>
        </Card>
        <Card>
          <StyledImg
            src="img/musicplayer.webp"
            style={{ width: '100%', height: 'auto', padding: '1rem' }}
            alt="Project"
            width="1038"
            height="429"
          />
          <div>
            <StyledCardTitle>Music Player</StyledCardTitle>
            <StyledCardText>
              Barebone Web Audio API player built with React.
            </StyledCardText>
          </div>
          <LinkContainer>
            <DemoLink link={'https://filahf.github.io/react-music-player/'} />
            <GithubLink link={'https://github.com/filahf/react-music-player'} />
          </LinkContainer>
        </Card>
        <Card>
          <StyledImg
            src="img/avatar.webp"
            width="460"
            height="460"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '10rem',
              borderRadius: '50%',
              padding: '1rem',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            alt="Project"
          />
          <ContentContainer>
            <StyledCardTitle>Portfolio</StyledCardTitle>
            <StyledCardText>
              The website you&apos;re currently browsing!
            </StyledCardText>
          </ContentContainer>
          <LinkContainer>
            <GithubLink link={'https://github.com/filahf/react-music-player'} />
          </LinkContainer>
        </Card>
        <Card>
          <StyledImg
            src="img/budgie.webp"
            width="675"
            height="672"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '250px',
              padding: '1rem',
            }}
            alt="Project"
          />
          <div>
            <ContentContainer>
              <StyledCardTitle>Budgie Stream</StyledCardTitle>
              <StyledCardText>
                Electron app that lets you stream whatever you are playing on
                your computer to your Sonos devices. This enables endless
                content not otherwise provided in the official app
              </StyledCardText>
            </ContentContainer>
            <LinkContainer>
              <DemoLink link={'https://budgiestream.com/'} />
              <GithubLink link={'https://github.com/filahf/budgie-stream'} />
            </LinkContainer>
          </div>
          {/* <Tags>
            <Tag>HTML</Tag>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
          </Tags> */}
        </Card>
      </CardContainer>
    </Container>
  );
};

export default ProjectsPage;

const StyledCardText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
`;

const StyledSubTitle = styled.h2`
  font-size: 3rem;
  margin: 0;
  margin-bottom: 2rem;
  font-weight: 200;
`;

const StyledImg = styled.img`
  display: block;
  aspect-ratio: attr(width) / attr(height);
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  direction: ltr;
`;

const ContentContainer = styled.div`
  margin: 1rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5%;
  @media (max-width: 768px) {
    margin-bottom: 10%;
  }
`;

const CardContainer = styled.div`
  margin: 0;
  margin-bottom: 0em;
  width: calc(100% - 2em);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1em;
  grid-template-areas:
    'a a'
    'a a'
    'b b'
    'c c'
    'd d';
  width: 80%;
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em;
    grid-template-areas:
      'a a b c'
      'a a d d';
  }
`;

const Card = styled.div`
  box-shadow: 0.2rem 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  background-color: #81a1c1;
  text-align: center;
  width: 100%;
  min-height: 20em;
  padding-bottom: 1rem;
  position: relative;
  display: grid;
  place-items: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0.2rem 0.2rem 1rem 0 rgba(0, 0, 0, 0.4);
  }
  &:nth-child(1) {
    grid-area: a;
    color: #2e3440;
  }
  &:nth-child(2) {
    grid-area: b;
    background-color: #a3be8c;
  }
  &:nth-child(3) {
    grid-area: c;
    color: #2e3440;
  }
  &:nth-child(4) {
    grid-area: d;
    background-color: #ebcb8b;
    direction: rtl;
    @media (min-width: 1000px) {
      display: grid;

      grid-template-columns: 50% 50%;
    }
  }
`;

const StyledCardTitle = styled.h3`
  color: #2e3440;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
`;
