import styled from "styled-components";

export const LogoPrimary = styled.h1`
  .logo {
    color: ${props => props.theme.blue[500]};
  }

  .plus {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
    font-size: 2rem;
    padding-left: 3px;
  }
`

export const LogoSecundary = styled(LogoPrimary)`
  color: ${props => props.theme.white[50]};
`