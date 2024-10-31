import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import {
  IntroductionContainer,
  IntroductionContent,
  IntroductionImage,
  IntroductionItems,
  IntroductionTitle,
  Item,
  ItemIcon,
} from './styles'

import introImg from '../../../../assets/Imagem.png'

export function Introduction() {
  return (
    <IntroductionContainer>
      <IntroductionContent>
        <IntroductionTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </IntroductionTitle>
        <IntroductionItems>
          <Item>
            <ItemIcon variant="yellow-dark">
              <ShoppingCart weight="fill" size={16} />
            </ItemIcon>
            <p>Compra simples e segura</p>
          </Item>
          <Item>
            <ItemIcon variant="yellow">
              <Package weight="fill" size={16} />
            </ItemIcon>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item>
            <ItemIcon variant="base-text">
              <Timer weight="fill" size={16} />
            </ItemIcon>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item>
            <ItemIcon variant="purple">
              <Coffee weight="fill" size={16} />
            </ItemIcon>
            <p>O café chega fresquinho até você</p>
          </Item>
        </IntroductionItems>
      </IntroductionContent>
      <IntroductionImage src={introImg} alt="" />
    </IntroductionContainer>
  )
}
