import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const ProductsContainer = styled.div``;

export class Product extends React.Component {
  render() {
    return (
      <ProductsContainer>
        <Image src={this.props.imageLink} />
        <p>{this.props.name}</p>
        <p>R${this.props.value}</p>
        <button onClick={() => this.props.cartShow(this.props.id)}>
          Adicionar ao Carrinho
        </button>
      </ProductsContainer>
    );
  }
}

export default Product;
