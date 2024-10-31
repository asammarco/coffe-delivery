import styled from 'styled-components'

export const SummaryContainer = styled.div`
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.75rem;
  }

  span {
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 800;
  }
`

export const Subtotal = styled.b`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 400;
`
