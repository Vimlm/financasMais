import styled from "styled-components";

export const HeaderStyled = styled.header`
  .header {
    font-family: Montserrat;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: var(--blue-500, #457B9D);
  }

  .menu {
    display: flex;
    padding: 12px 48px;
    align-items: center;
    gap: 24px;
  }

  .plus {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
    font-size: 2rem;
    padding-left: 3px;
  }

  .btnMenu {
    color: var(--blue-500, #457B9D);
    font-size: 1.5rem;
  }

  .btnMenuConta {
    display: flex;
    font-family: Roboto;
    padding: 12px 48px;
    align-items: center;
    border-radius: 8px;
    background: var(--blue-700, #1D3557);
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    color: var(--white-50, #FFF);
    font-size: 1.5rem;
    font-weight: 700;
  }
`
