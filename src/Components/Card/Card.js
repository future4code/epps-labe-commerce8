import React from "react";
import styled from "styled-components";

const MainProducts = styled.div`
  margin: 2px;
  margin-bottom: 20px;
`

const Image = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    bottom: -15px;
  `

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const ProductsContainer = styled.div`
    background: #fff;
    border-radius: 5px;
    text-align: center;
    padding: 20px;
  `

const ItemNome = styled.p``
const ItemPreco = styled.p``

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
        <Image>
          <Img src={this.props.imageLink} alt={this.props.name} />
        </Image>
        <ProductsContainer>
          <ItemNome>{this.props.name}</ItemNome>
          <ItemPreco>R${this.props.value}</ItemPreco>
          <Button onClick={() => this.props.cartShow(this.props.id)}>
            COMPRAR
          </Button>
        </ProductsContainer>
      </MainProducts>
    );
  }
}

export default Product;
