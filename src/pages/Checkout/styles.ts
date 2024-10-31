import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  gap: 2.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }
`

export const DeliveryAddressContainer = styled.div`
  width: 40rem;
  display: start;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 2.5rem;
  margin: 1rem 0rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`

export const DeliveryAddressHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;

  gap: 0.5rem;

  strong {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;

  gap: 0.75rem;
`

export const PaymentMethodContainer = styled.div`
  width: 40rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  span {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['purple']};
    font-style: italic;
    font-size: 0.9rem;
    font-weight: 800;
  }
`

export const PaymentMethodHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  gap: 0.5rem;

  strong {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 2rem;
`

export const PaymentTypeButton = styled(RadioGroup.Item)`
  width: 12rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.75rem;
  background-color: ${(props) => props.theme['base-button']};
  padding: 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CheckoutCart = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
