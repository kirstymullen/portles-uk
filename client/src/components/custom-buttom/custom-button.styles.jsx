import styled, {css} from 'styled-components';

const buttonStyles = css`
  background-color: black;

  &:hover {
    background-color: #111111;
    box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.1);
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const googleSignInStyles = css`
  background-color: #357ae8;

  &:hover {
    background-color: #4285f4;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 160px;
  width: auto;
  letter-spacing: 0.5px;
  padding: 16px 25px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  color: white;
  border: none;

  ${getButtonStyles}
`;
