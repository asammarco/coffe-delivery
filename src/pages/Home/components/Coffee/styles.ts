import styled from 'styled-components'

export const CoffeeCard = styled.div`
  width: 14rem;
  padding: 1.25rem 1.5rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2.5rem;
  }
`

export const HeaderCardTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    border-radius: 50px;

    font-size: 0.625rem;
    font-weight: bold;
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
  }
`

export const BodyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  strong {
    font-size: 1.25rem;
    font-weight: 'bold';
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
    margin-top: 1rem;
    text-align: center;
  }
`

export const FooterCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: start;
  gap: 0.3rem;

  span {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.5rem;
    font-weight: 900;
    color: ${(props) => props.theme['base-text']};
  }
`

export const FooterCardButtons = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 0.5rem;
`
export const CartButton = styled.nav`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.white};
  }

  &:hover {
    background-color: ${(props) => props.theme['purple']};
    cursor: pointer;
  }
`
