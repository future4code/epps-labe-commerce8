import React from "react";
import styled from "styled-components";
import Card from "./Card";

const ProductsContainer = styled.div`
    color: black;
    display: ${props => props.display};
    grid-template-columns: repeat(${props => props.repeat});
    grid-gap: 5px;
    text-align: center;
    margin: 10px;
`;

const productsList = [
  {
    id: 1,
    name: "Brinquedo Foguete Espacial",
    value: 200,
    imageUrl: "https://picsum.photos/200/142",
  },
  {
    id: 2,
    name: "Brinquedo Satélite",
    value: 400,
    imageUrl: "https://picsum.photos/200/143",
  },
  {
    id: 3,
    name: "Brinquedo Astronauta",
    value: 150,
    imageUrl: "https://picsum.photos/200/144",
  },
  {
    id: 4,
    name: "Brinquedo LEGO Spaceship",
    value: 1200,
    imageUrl: "https://picsum.photos/200/145",
  },
  {
    id: 5,
    name: "Brinquedo LEGO Ônibus Espacial",
    value: 700,
    imageUrl: "https://picsum.photos/200/146",
  },
  {
    id: 6,
    name: "Brinquedo Planeta Marte",
    value: 150,
    imageUrl: "https://picsum.photos/200/147",
  },
  {
    id: 7,
    name: "Brinquedo Planeta Plutão",
    value: 900,
    imageUrl: "https://picsum.photos/200/148",
  },
  {
    id: 8,
    name: "Brinquedo Planeta Saturno",
    value: 450,
    imageUrl: "https://picsum.photos/200/149",
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
        <ProductsContainer display="grid" repeat="4, 1fr">
          {list}
        </ProductsContainer>;
      </div>
    );
  }
}

export default SectionProduct;
