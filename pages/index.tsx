import styled from 'styled-components';
import MainLayout from '../layout/Layout';
import Birds from '../layout/Birds';
import LandingPage from '../components/LandingPage';
import ProjectsPage from '../components/ProjectsPage';

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <StyledSection>
        <Birds />
        <LandingPage />
      </StyledSection>
      <section id="projects">
        <ProjectsPage />
      </section>
    </MainLayout>
  );
}

const StyledSection = styled.section`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;
