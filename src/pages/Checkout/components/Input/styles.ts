import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['purple']};
    font-style: italic;
    font-size: 0.9rem;
    font-weight: 800;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.75rem;
    font-style: italic;
    margin-top: 1rem;
    margin-left: -4rem;
  }
`

interface FieldProps {
  width: string
  display?: string
}

export const Field = styled.input.withConfig({
  shouldForwardProp: (prop) => 'message' !== prop,
})<FieldProps>`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: 1.125rem;
  padding: 0.75rem;
  margin-top: 1rem;
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.3;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
