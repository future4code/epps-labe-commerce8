import React from "react"
import styled from "styled-components"
import Card from "./Card"
import ImgOne from "../../Img/Img1.jpg"
import ImgTwo from "../../Img/Img2.jpg"
import ImgThree from "../../Img/Img3.jpg"
import ImgFour from "../../Img/Img4.jpg"
import ImgFive from "../../Img/Img5.jpg"
import ImgSix from "../../Img/Img6.jpg"
import ImgSeven from "../../Img/Img7.jpg"
import ImgEight from "../../Img/Img8.jpg"

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 100%;

  @media (max-device-width: 650px) {
    grid-template-columns: 1fr;
  }
`

const BigContainer = styled.div`
`

const FilterContainer = styled.div`
  margin-bottom: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media(min-width: 651px) {
      grid-template-columns: repeat(1, 1fr);
      margin: 10px;
    }

`

const MainItemCard = styled.div`
    background: #330024;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgba(0,0,0,.1);
    padding: 0px 15px 0px;
    text-align: left;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;

    @media(min-width: 768px) and (max-width: 1020px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 436px) and (max-width: 767px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 435px) {
      grid-template-columns: repeat(1, 1fr);
    }
`

const TitleFilter = styled.h2`
  background: #62006b;
  color: white;
  margin: 10px;
  padding: 5px;
`

const Input = styled.input`
  width: 96%;
  outline: none;
  border: 2px solid #62006b;
  font-size: 16px;
`

const Select = styled.select`
  border: 2px solid #62006b;
  padding: 10px;
  font-size: 16px;
`

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

  orderProducts = (a, b) => {
    if (this.state.order === "precoCrescente") {
      return a.value - b.value;
    } else if (this.state.order === "precoDecrescente") {
      return b.value - a.value;
    } else {
      return a.id - b.id;
    }
  };

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
    const SelectProduct = productsList.find((product) => product.id === id);
    this.props.passProduct(SelectProduct);
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
          <TitleFilter>Filtros:</TitleFilter>
          <FilterContainer>
            <p>Valor Mínimo:</p>
            <Input
              type={"number"}
              value={this.state.minValue}
              onChange={this.onChangeMinValue}
            ></Input>
          </FilterContainer>
          <FilterContainer>
            <p>Valor Máximo:</p>
            <Input
              type={"number"}
              value={this.state.maxValue}
              onChange={this.onChangeMaxValue}
            ></Input>
          </FilterContainer>
          <FilterContainer>
            <p>Buscar Produto:</p>
            <Input
              type={"text"}
              value={this.state.searchProduct}
              onChange={this.onChangeSearchProduct}
            ></Input>
          </FilterContainer>
          <FilterContainer>
              <p>Ordenar por:</p>
              <Select
                name="order"
                value={this.state.order}
                onChange={this.onChangeOrder}
              >
                <option value="precoCrescente">Menor Preço</option>
                <option value="precoDecrescente">Maior Preço</option>
              </Select>
          </FilterContainer>
        </BigContainer>
        <MainItemCard>{list}</MainItemCard>
       </AppContainer>
    )
  }
}

export default SectionProduct;
