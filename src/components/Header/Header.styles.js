import styled from 'styled-components';

export const Wrapper = styled.div`
background: var(--darkGray);
padding: 0 20px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: auto 0;
  max-width: var(--maxWidth);
  padding: 20px 0;
`;

export const RoxxLogo = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;