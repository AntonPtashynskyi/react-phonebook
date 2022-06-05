import styled from 'styled-components';
import * as palette from '../styles/Pallet.styled';

export const StyledLink = styled.a`
  position: relative;
  text-decoration: none;

  color: ${palette.CONTACT_TEXT_COLOR};
  cursor: pointer;
  margin-bottom: 5px;
  transition: all 250ms ease;

  &:hover,
  &:focus {
    text-shadow: 0px 0px 2px white;
  }

  ${props => {
    switch (props.mode) {
      case 'mail':
        return `
          &::before {
            display: inline-block;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            font: var(--fa-font-solid);
            content: '\f0e0';
            font-size: 12px;

            margin-right: 10px;
          }

          &:hover::after {
            content: 'Mail to';
            position: absolute;
            right: 5px;
            top: -5px;
            background: rgba(128, 128, 128, 0.8);
            color: white;
            display: inline-block;
            text-align: center;

            padding: 5px 10px;
            height: 25px;
            border-radius: 5px;

            @media (min-width: 1024px) {
                top: -30px;
                right: 20px;
            }
          }
        `;

      default:
        return `
        &::before {
        display: inline-block;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font: var(--fa-font-solid);
        content: '\f3cf';
        font-size: 14px;
        
        margin-right: 10px;
        }
          
          &:hover::after {
            content: 'Call';
            position: absolute;
            right: 30px;
            top: -5px;
            background: rgba(128, 128, 128, 0.8);
            color: white;
            display: inline-block;
            text-align: center;

            padding: 5px 10px;
            height: 25px;
            border-radius: 5px;

            @media(min-width: 1024px){
                right: 50px;
                top: -30px
            }
          }
        `;
    }
  }}
`;
