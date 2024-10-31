import styled, { css } from 'styled-components'

export const IntroductionContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`

export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const IntroductionTitle = styled.div`
  width: 100%;
  max-width: 36.75rem;
  height: 12rem;
  margin-bottom: 4.125rem;

  h1 {
    font: 800 3rem 'Baloo 2';
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 2rem;
    line-height: 1.3;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IntroductionItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5625rem;

  p {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
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

export const IntroductionImage = styled.img`
  max-width: 29.75rem;
  max-height: 22.5rem;
`
