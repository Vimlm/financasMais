import styled from "styled-components";

export const ContainerLP = styled.div`
  .containerLP {
    display: flex;
    width: 74rem;
    padding: 1.5rem 0rem;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
  }
`

export const WelcomeSection = styled.section`
  .sectionWelcome {
    background: url("background-Section-1.svg") no-repeat bottom -40px center / auto 53%;
}
`

export const DesafioSection = styled.section`
  .sectionDesafio {
    background: #E9F0F0;
  }
`

export const EmailSection = styled.section`
  .sectionEmail {
    background: var(--blue-200, #A8DADC);
  }
`