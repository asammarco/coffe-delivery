import styled, { css } from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Columns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2.5rem;
  gap: 6rem;
`

export const Border = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;

  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.yellow}, ${theme.purple})`};
`

export const InfoDetails = styled.div`
  background-color: ${(props) => props.theme.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 6px 36px;

  padding: 2.5rem;

  gap: 2rem;
`

export const DetailsItem = styled.div`
  width: 100%;
  display: flex;

  gap: 0.75rem;
`

interface ItemIconProps {
  variant?: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const ItemIcon = styled.span.withConfig({
  shouldForwardProp: (prop) => 'message' !== prop,
})<ItemIconProps>`
  border-radius: 50px;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant &&
    css`
      background: ${props.theme[props.variant]};
    `}

  svg {
    color: ${(props) => props.theme.white};
  }
`
