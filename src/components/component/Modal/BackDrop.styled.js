import styled from 'styled-components';

export const StyledBackdrop = styled.div.attrs({ className: 'backdrop' })`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;
