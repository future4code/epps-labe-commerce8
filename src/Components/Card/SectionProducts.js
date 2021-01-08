import React from "react";
import styled from "styled-components";
import Card from "./Card";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  height: 80vh;
`;

const productsList = [
  {
    id: 1,
    name: "Brinquedo Foguete Espacial",
    value: 200,
    imageUrl: "https://picsum.photos/150/300",
  },
  {
    id: 2,
    name: "Brinquedo Satélite",
    value: 400,
    imageUrl: "https://picsum.photos/120/300",
  },
  {
    id: 3,
    name: "Brinquedo Astronauta",
    value: 300,
    imageUrl: "https://picsum.photos/180/300",
  },
  {
    id: 4,
    name: "Brinquedo LEGO Spaceship",
    value: 1200,
    imageUrl: "https://picsum.photos/190/300",
  },
  {
    id: 5,
    name: "Brinquedo LEGO Ônibus Espacial",
    value: 700,
    imageUrl: "https://picsum.photos/203/300",
  },
  {
    id: 6,
    name: "Brinquedo Planeta Marte",
    value: 300,
    imageUrl: "https://picsum.photos/230/300",
  },
  {
    id: 7,
    name: "Brinquedo Planeta Plutão",
    value: 900,
    imageUrl: "https://picsum.photos/210/300",
  },
  {
    id: 8,
    name: "Brinquedo Planeta Saturno",
    value: 450,
    imageUrl: "https://picsum.photos/212/300",
  },
];

export class SectionProduct extends React.Component {
  cartProduct = (id) => {
    const selectProduct = productsList.find((product) => product.id === id);
    this.props.passProduct(selectProduct);
  };

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
    return (
      <div>
        <ProductsContainer>{list}</ProductsContainer>;
      </div>
    )
  }
}

export default SectionProduct;
