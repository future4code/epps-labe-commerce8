import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  width: 350px;
`

const CartFullContainer = styled.div`
  padding: 15px;
`

const Itemcart = styled.div`
  background-color: white;
  margin: 2px;
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  align-items: center;
`

const ItemInfo = styled.p`
  font-size: ${props => props.text}px;
`

const Button = styled.button`
  font-size: 12px;
  height: 25px;
  background-color: red;
  outline: none;
  border: none;
  color: white;
  align-items: center;
`

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #62006b;
  color: white;
  padding: 10px;
  margin-bottom: 15px;
`


export class Cart extends React.Component {
  updateProducts = (list) => {
    list = list.map((product) => {
      return (
        <Itemcart key="id">
          <ItemInfo text="14">{product.name}</ItemInfo>
          <ItemInfo text="14">Qtd: {product.quantity}x <br/> R${product.value * product.quantity}</ItemInfo>
          <Button text="12" onClick={() => this.props.delete(product.id)}>
            Excluir
          </Button>
        </Itemcart>
      );
    });
    return list;
  };

  valueUpdate = (list) => {
    let value = 0;
    for (let i = 0; i < list.length; i++) {
      value += list[i].value * list[i].quantity;
    }
    return value;
  };

  render() {
    let cartList = this.props.list;
    const totalValue = this.valueUpdate(cartList);
    cartList = this.updateProducts(cartList);
    return (
      <CartFullContainer>
          <CartContainer>
            <DivContainer>
              <p>Meu Carrinho:</p>  
              <p>Valor Total: R$ {totalValue},00</p>
            </DivContainer>
          {cartList}
          </CartContainer>
      </CartFullContainer>
    );
  }
}

export default Cart;
