import { useSummaryCart } from '../../../../../../hooks/useSummaryCart'
import { priceFormatter } from '../../../../../../utils/formatter'
import { Subtotal, SummaryContainer } from './styles'

const deliveryCost = 390

export function Summary() {
  const summary = useSummaryCart()
  return (
    <SummaryContainer>
      <div>
        <span>Total De Itens</span>
        <Subtotal>
          R$ {priceFormatter.format(summary.total / 100) || 0}
        </Subtotal>
      </div>
      <div>
        <span>Entrega</span>
        <Subtotal>
          R${' '}
          {(summary.total && priceFormatter.format(deliveryCost / 100)) ||
            priceFormatter.format(0)}
        </Subtotal>
      </div>
      <div>
        <strong>Total</strong>
        <strong>
          R${' '}
          {(summary.total &&
            priceFormatter.format((summary.total + deliveryCost) / 100)) ||
            priceFormatter.format(0)}
        </strong>
      </div>
    </SummaryContainer>
  )
}
