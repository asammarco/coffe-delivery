import styled from 'styled-components'

export const ItemContainer = styled.div`
  width: 100%;
  height: 5.875rem;
  display: flex;
  align-items: start;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const ItemDetails = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 1.25rem;
`

export const ItemButtons = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 0.5rem;
`

export const ButtonRemove = styled.button`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  line-height: 1.6rem;
  gap: 0.3rem;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['base-hover']};
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const ItemSummary = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: end;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.3;
`
