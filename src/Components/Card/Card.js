import React from "react";
import styled from "styled-components";

const MainProducts = styled.div`
`

const Image = styled.img`
    background: #fff;
  `

const ProductsContainer = styled.div`
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgba(0,0,0,.1);
    padding: 0px 15px 20px;
    text-align: center;
    margin-bottom: 20px;
    height: 180px;
  `

const ItemNome = styled.p`
  padding: 28px;
`

const Button = styled.button`
    background-color: #176eb7;
    border: none;
    outline: none;
    border-radius: 2px;
    cursor: pointer;
    color: #fff!important;
    padding: 7px 20px;
  `

export class Product extends React.Component {
  render() {
    return (
      <MainProducts>
        <Image src={this.props.imageLink} alt={this.props.name} />
        <ProductsContainer>
          <ItemNome>{this.props.name}</ItemNome>
          <p>R${this.props.value}</p>
          <Button onClick={() => this.props.cartShow(this.props.id)}>
            Adicionar ao Carrinho
          </Button>
        </ProductsContainer>
      </MainProducts>
    );
  }
}

export default Product;
