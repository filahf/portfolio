import styled from 'styled-components';

const Card = (): JSX.Element => (
  <StyledContainer>
    <StyledPhoto />
    <Title>The Benefits of Green Apples</Title>
    <Description>
      Green apples have a high fiber content which helps in increasing the
      body's metabolism. While consuming an apple, make sure that you're not
      tossing the peel in the trash. Consuming apple with its peel improves the
      overall health. Due to its high fiber content, apple helps in
      detoxification process. It keeps the liver and digestive system away from
      harmful elements.
    </Description>
    <Actions>
      <ActionButton>0 Comments</ActionButton>
      <ActionButton>0 Likes</ActionButton>
      <ActionButton>0 Views</ActionButton>
    </Actions>
  </StyledContainer>
);

export default Card;

const StyledContainer = styled.div`
  padding: 12px 12px 18px;
`;

const StyledPhoto = styled.div`
  min-height: 22em;
  max-width: 100%;
  background-color: white;
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`;

const Description = styled.p`
  margin-top: 0;
  color: #fff;
  text-align: left;
  font-weight: 300;
`;

const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
`;

const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;
