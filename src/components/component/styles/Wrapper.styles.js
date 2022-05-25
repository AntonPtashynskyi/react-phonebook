import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 40px 15px;
  max-width: 100%;
  width: 320px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 20px 15px;
  }

  @media (min-width: 1024px) {
    width: 1024px;
  }
`;
