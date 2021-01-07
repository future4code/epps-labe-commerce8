import React from "react";
import styled from "styled-components";
import Card from "./Card";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  height: 80vh;
`;

const productsList = [
  {
    id: 1,
    name: "Brinquedo 1",
    value: 200,
    imageUrl: "https://picsum.photos/150/300",
  },
  {
    id: 2,
    name: "Brinquedo 2",
    value: 400,
    imageUrl: "https://picsum.photos/120/300",
  },
  {
    id: 3,
    name: "Brinquedo 3",
    value: 300,
    imageUrl: "https://picsum.photos/180/300",
  },
  {
    id: 4,
    name: "Brinquedo 4",
    value: 1200,
    imageUrl: "https://picsum.photos/190/300",
  },
  {
    id: 5,
    name: "Brinquedo 5",
    value: 700,
    imageUrl: "https://picsum.photos/203/300",
  },
  {
    id: 6,
    name: "Brinquedo 6",
    value: 300,
    imageUrl: "https://picsum.photos/230/300",
  },
  {
    id: 7,
    name: "Brinquedo 7",
    value: 900,
    imageUrl: "https://picsum.photos/210/300",
  },
  {
    id: 8,
    name: "Brinquedo 8",
    value: 450,
    imageUrl: "https://picsum.photos/212/300",
  },
];

export class SectionProduct extends React.Component {

  cartProduct = (id) => {
    const selectProduct = productsList.find(product => product.id === id)
    this.props.passProduct(selectProduct)
  }


  updateProducts = (list) => {
    list = list.map((product, index) => {
      return (
        <Card
          key={index}
          id={product.id}
          imageLink={product.imageUrl}
          name={product.name}
          value={product.value}
          cartShow={this.cartProduct}
        />
      );
    });
    return list;
  };

  render() {
    let list = productsList;
    list = this.updateProducts(list);
    return <ProductsContainer>{list}</ProductsContainer>;
  }
}

export default SectionProduct;
