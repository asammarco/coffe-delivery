import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 25.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  gap: 2rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;

  a {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-text']};

    &:hover {
      opacity: 0.9;
    }
  }
`

export const ButtonConfirm = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  border: none;
  transition: background-color 0.2s;
  font-size: 0.75rem;
  line-height: 1.6;
  font-weight: 800;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.9;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`
