import {
  MapPinLine,
  Bank,
  CreditCard,
  CurrencyDollar,
  Money,
} from 'phosphor-react'

import {
  CheckoutCart,
  CheckoutContainer,
  DeliveryAddressContainer,
  DeliveryAddressHeader,
  PaymentMethodContainer,
  PaymentMethodHeader,
  PaymentType,
  PaymentTypeButton,
  Row,
} from './styles'

import { Cart } from './components/Cart'
import { Input } from './components/Input'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContextSelector } from 'use-context-selector'
import { OrderContext } from '../../context/OrderContext'

const newOrderValidationSchema = zod.object({
  cep: zod.string().min(9, 'Insira um CEP válido'),
  rua: zod.string().min(1, 'Insira a rua'),
  numero: zod
    .number({ invalid_type_error: 'Insira um número' })
    .gt(0, 'Insira um número'),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Insira o Bairro'),
  cidade: zod.string().min(1, 'Insira a cidade'),
  estado: zod
    .string()
    .min(1, 'Insira um estado')
    .max(2, 'Insira somente as iniciais do estado'),
  paymentType: zod.string().min(1, 'Escolha um método de pagamento'),
})

export type Order = zod.infer<typeof newOrderValidationSchema>

export function Checkout() {
  const { checkout, address } = useContextSelector(OrderContext, (context) => {
    return context
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Order>({
    resolver: zodResolver(newOrderValidationSchema),
    defaultValues: {
      cep: address.cep,
      rua: address.rua,
      numero: address.numero,
      complemento: address.complemento,
      bairro: address.bairro,
      cidade: address.cidade,
      estado: address.estado
    },
  })

  function handleNewOrder(data: Order) {
    checkout(data)
    reset({
      paymentType: ''
    })
  }

  return (
    <CheckoutContainer>
      <form id="checkout" onSubmit={handleSubmit(handleNewOrder)}>
        <h1>Complete seu pedido</h1>
        <DeliveryAddressContainer>
          <DeliveryAddressHeader>
            <MapPinLine size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </DeliveryAddressHeader>
          <Row>
            <Input
              id="cep"
              type="text"
              placeholder="CEP"
              width={'12.5rem'}
              display={'block'}
              maskType={'cep'}
              error={errors.cep}
              {...register('cep')}
            />
          </Row>
          <Row>
            <Input
              id="rua"
              type="text"
              placeholder="Rua"
              width={'38.8rem'}
              display={'block'}
              error={errors.rua}
              {...register('rua')}
            />
          </Row>
          <Row>
            <Input
              id="numero"
              type="text"
              width={'12.5rem'}
              placeholder="Número"
              error={errors.numero}
              {...register('numero', { valueAsNumber: true })}
            />
            <Input
              id="complemento"
              type="text"
              width={'24rem'}
              optional={true}
              placeholder={'Complemento'}
              {...register('complemento')}
            />
          </Row>
          <Row>
            <Input
              id="bairro"
              type="text"
              width={'12.5rem'}
              placeholder="Bairro"
              error={errors.bairro}
              {...register('bairro')}
            />
            <Input
              id="cidade"
              type="text"
              width={'17.5rem'}
              placeholder="Cidade"
              error={errors.cidade}
              {...register('cidade')}
            />
            <Input
              id="estado"
              type="text"
              width={'4rem'}
              placeholder="Estado"
              maxLength={2}
              error={errors.estado}
              {...register('estado')}
            />
          </Row>
        </DeliveryAddressContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeader>
            <CurrencyDollar size={22} />
            <div>
              <strong>Pagamento</strong>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentMethodHeader>

          <Controller
            control={control}
            name="paymentType"
            defaultValue=""
            render={({ field }) => {
              return (
                <PaymentType onValueChange={field.onChange} value={field.value}>
                  <PaymentTypeButton value={'credito'}>
                    <CreditCard size={18} />
                    CARTÃO DE CRÉDITO
                  </PaymentTypeButton>
                  <PaymentTypeButton value={'debito'}>
                    <Bank size={18} />
                    CARTÃO DE DÉBITO
                  </PaymentTypeButton>
                  <PaymentTypeButton value={'dinheiro'}>
                    <Money size={18} />
                    DINHEIRO
                  </PaymentTypeButton>
                </PaymentType>
              )
            }}
          />
          {errors.paymentType && <span>{errors.paymentType?.message}</span>}
        </PaymentMethodContainer>
      </form>
      <CheckoutCart>
        <h1>Cafés Selecionados</h1>
        <Cart formId={'checkout'} />
      </CheckoutCart>
    </CheckoutContainer>
  )
}
