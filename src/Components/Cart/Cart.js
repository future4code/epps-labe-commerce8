import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  width: 900px;
`;

export class Cart extends React.Component {
  updateProducts = (list) => {
    list = list.map((product, index) => {
      return (
        <div>
          <img src={product.imageUrl} />
          <p>{product.name}</p>
          <p>{product.value}</p>
          <p>{product.quantity}</p>
          <p>{product.value * product.quantity}</p>
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
  };

  render() {
    let cartList = this.props.list;
    const totalValue = this.valueUpdate(cartList);
    cartList = this.updateProducts(cartList);
    return (
      <div>
        <h2>Carrinho</h2>
        <CartContainer lines={cartList.length}>{cartList}</CartContainer>
        <h2>Valor Total: {totalValue}</h2>
      </div>
    );
  }
}

export default Cart;
