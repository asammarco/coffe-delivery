import {
  DetailsItem,
  InfoContainer,
  InfoDetails,
  ItemIcon,
  SuccessContainer,
  Border,
  Columns,
} from './styles'
import Illustration from '../../assets/Illustration.png'
import { MapPin, Timer } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { OrderContext } from '../../context/OrderContext'
import { useParams } from 'react-router-dom'

export function Success() {
  const orders = useContextSelector(OrderContext, (context) => {
    return context.orders
  })

  const { orderId } = useParams()

  const order = orders.find((order) => order.id === Number(orderId))

  if (!order?.id) {
    return null
  }

  return (
    <SuccessContainer>
      <InfoContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Columns>
          <Border>
            <InfoDetails>
              <DetailsItem>
                <ItemIcon variant={'purple'}>
                  <MapPin weight="fill" size={16} />
                </ItemIcon>
                <div>
                  <p>
                    Entrega em{' '}
                    <strong>
                      {order.address.rua}, {order.address.numero}
                    </strong>
                  </p>
                  <p>
                    {order.address.bairro} - {order.address.cidade},{' '}
                    {order.address.estado}
                  </p>
                </div>
              </DetailsItem>
              <DetailsItem>
                <ItemIcon variant={'yellow'}>
                  <Timer weight="fill" size={16} />
                </ItemIcon>
                <div>
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </div>
              </DetailsItem>
              <DetailsItem>
                <ItemIcon variant={'yellow-dark'}>
                  <MapPin weight="fill" size={16} />
                </ItemIcon>
                <div>
                  <p>Pagamento na entrega</p>
                  {order.paymentType === 'credito' && (
                    <strong>Cartão de Crédito</strong>
                  )}
                  {order.paymentType === 'debito' && (
                    <strong>Cartão de Dédito</strong>
                  )}
                  {order.paymentType === 'dinheiro' && (
                    <strong>Em dinheiro</strong>
                  )}
                </div>
              </DetailsItem>
            </InfoDetails>
          </Border>
          <img src={Illustration} alt="" />
        </Columns>
      </InfoContainer>
    </SuccessContainer>
  )
}
