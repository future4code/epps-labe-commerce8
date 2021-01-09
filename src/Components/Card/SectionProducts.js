import React from "react";
import styled from "styled-components";
import Card from "./Card";
import ImgOne from "../../Img/Img1.jpg";
import ImgTwo from "../../Img/Img2.jpg";
import ImgThree from "../../Img/Img3.jpg";
import ImgFour from "../../Img/Img4.jpg";
import ImgFive from "../../Img/Img5.jpg";
import ImgSix from "../../Img/Img6.jpg";
import ImgSeven from "../../Img/Img7.jpg";
import ImgEight from "../../Img/Img8.jpg";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  height: 100%;
  width: 100%;
  border: 2px solid black;
`;

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  height: 80vh;
  width: 20vw;
`;

const FilterContainer = styled.div`
  margin-bottom: 1vh;
`;

const FilterSelect = styled.div``;

const AppContainer = styled.div`
  display: flex;
  width: 100%;
`;

const productsList = [
  {
    id: 1,
    name: "Camiseta In Space We Trust",
    value: 125,
    imageUrl: ImgOne,
  },
  {
    id: 2,
    name: "Camisa Espacial",
    value: 75,
    imageUrl: ImgTwo,
  },
  {
    id: 3,
    name: "Camiseta Balões Espaciais",
    value: 180,
    imageUrl: ImgThree,
  },
  {
    id: 4,
    name: "Camiseta Espacial Psicodelica",
    value: 250,
    imageUrl: ImgFour,
  },
  {
    id: 5,
    name: "Camiseta Gato Espacial",
    value: 275,
    imageUrl: ImgFive,
  },
  {
    id: 6,
    name: "Camiseta Macaco Espacial",
    value: 200,
    imageUrl: ImgSix,
  },
  {
    id: 7,
    name: "Camiseta Nasa",
    value: 80,
    imageUrl: ImgSeven,
  },
  {
    id: 8,
    name: "Camiseta Spaceship",
    value: 100,
    imageUrl: ImgEight,
  },
];

export class SectionProduct extends React.Component {
  state = {
    minValue: "",
    maxValue: "",
    searchProduct: "",
    order: "",
  };

  onChangeOrder = (event) => {
    this.setState({ order: event.target.value });
  };

  onChangeMinValue = (event) => {
    this.setState({ minValue: event.target.value });
  };

  onChangeMaxValue = (event) => {
    this.setState({ maxValue: event.target.value });
  };

  onChangeSearchProduct = (event) => {
    this.setState({ searchProduct: event.target.value });
  };

  // Filtrar por valor:
  filterByValue = (list) => {
    let minimumValue = this.state.minValue;
    let maximumValue = this.state.maxValue;
    if (minimumValue === "") {
      minimumValue = -Infinity;
    }
    if (maximumValue === "") {
      maximumValue = Infinity;
    }

    list = list.filter((product) => {
      return product.value >= minimumValue && product.value <= maximumValue;
    });
    return list;
  };

  // Ordernar os produtos:
  orderProducts = (a, b) => {
    if (this.state.order === "precoCrescente") {
      return a.value - b.value;
    } else if (this.state.order === "precoDecrescente") {
      return b.value - a.value;
    } else {
      return a.id - b.id;
    }
  };

  // FIltrar por nome:
  filterByName = (list) => {
    list = list.filter((product) => {
      if (
        product.name
          .toLowerCase()
          .includes(this.state.searchProduct.toLowerCase())
      ) {
        return true;
      }
    });
    return list;
  };

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
    list = this.filterByValue(list);
    list = this.filterByName(list);
    list = list.sort(this.orderProducts);
    list = this.updateProducts(list);
    return (
      <AppContainer>
        <BigContainer>
          <h2>Filtros:</h2>
          <FilterContainer>
            <label>Valor Mínimo:</label>
            <input
              type={"number"}
              value={this.state.minValue}
              onChange={this.onChangeMinValue}
            ></input>
          </FilterContainer>
          <FilterContainer>
            <label>Valor Máximo:</label>
            <input
              type={"number"}
              value={this.state.maxValue}
              onChange={this.onChangeMaxValue}
            ></input>
          </FilterContainer>
          <FilterContainer>
            <label>Buscar Produto:</label>
            <input
              type={"text"}
              value={this.state.searchProduct}
              onChange={this.onChangeSearchProduct}
            ></input>
          </FilterContainer>

          <FilterSelect>
            <select
              name="order"
              value={this.state.order}
              onChange={this.onChangeOrder}
            >
              <option value="precoCrescente">Preço Crescente</option>
              <option value="precoDecrescente">Preço Decrescente</option>
            </select>
          </FilterSelect>
        </BigContainer>
        <ProductsContainer>{list}</ProductsContainer>
      </AppContainer>
    );
  }
}

export default SectionProduct;
