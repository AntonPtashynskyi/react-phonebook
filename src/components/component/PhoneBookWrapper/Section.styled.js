import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 20px 0;

  h2 {
    display: flex;
    align-self: flex-start;
    margin-bottom: 10px;
    font-size: 12px;
  }

  button {
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;

    h2 {
      display: flex;
      align-items: center;

      height: 33px;
      font-size: 16px;
      margin: 0;
      margin-right: auto;
    }

    button {
      margin: 0;
    }
  }
`;
