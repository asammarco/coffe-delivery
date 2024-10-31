import styled from 'styled-components'

export const PurchaseContainer = styled.div`
  width: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.4rem 0.5rem;
  gap: 0.25rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  span {
    width: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
  }

  button {
    background-color: transparent;
    border: 0;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      cursor: pointer;
      svg {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`
