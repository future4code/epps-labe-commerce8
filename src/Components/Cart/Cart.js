import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  padding: 10px;
  display: grid;
  margin: 20px auto;
`;

const CartFullContainer = styled.div`
  border: 2px solid black;
  width: 300px;
`

export class Cart extends React.Component {
  updateProducts = (list) => {
    list = list.map((product) => {
      return (
        <div>
          <p>{product.name}</p>
          <p>Quantidade:{product.quantity}</p>
          <p>R${product.value * product.quantity}</p>
          <button onClick ={() => this.props.delete(product.id)}>Retirar produto do carrinho</button>
        </div>
      );
    });
    return list;
  };

  valueUpdate = (list) => {
    let value = 0;
    for (let i = 0; i < list.length; i++) {
      value += list[i].value * list[i].quantity;
    }
    return value
  };

  render() {
    let cartList = this.props.list;
    const totalValue = this.valueUpdate(cartList);
    cartList = this.updateProducts(cartList);
    return (
      <CartFullContainer>
        <h2>Carrinho:</h2>
        <CartContainer>{cartList}</CartContainer>
        <h2>Valor Total: R$ {totalValue}</h2>
      </CartFullContainer>
    );
  }
}

export default Cart;
