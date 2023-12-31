import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  border-radius: 0.5rem;
  background: ${ props => props.theme.blue[700] };
  color: ${ props => props.theme.white[50] };
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.75rem 3rem;
  align-items: center;
  font-family: Roboto;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background: tomato;
  }
`

export const PrimaryButton = styled(ButtonStyle)`
  width: ${props => props.width ? props.width : 'fit-content'};
  background-color: ${ props => props.theme.blue[700]};
  color: ${ props => props.theme.white[50]};
`

export const SecundaryButton = styled(ButtonStyle)`
  background-color: transparent;
  color: ${ props => props.theme.blue[500]};
  border: 1px solid ${ props => props.theme.blue[500]};
`