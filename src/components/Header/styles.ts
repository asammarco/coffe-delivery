import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  margin-top: 2rem;

  img:hover {
    opacity: 0.85;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 78rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ActionContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    text-decoration: none;
  }
`

export const LocalizationInfo = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['purple']};
  }
`

export const Cart = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  svg {
    color: ${(props) => props.theme.yellow};
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow']};
    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

interface BadgeProps {
  hidden: boolean
}

export const Badge = styled.span.withConfig({
  shouldForwardProp: (prop) => 'message' !== prop,
})<BadgeProps>`
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;
  font-weight: 800;
  color: ${(props) => props.theme.white};

  margin-top: -2rem;
  margin-left: 2rem;

  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  background: ${(props) => props.theme['yellow-dark']};
`
