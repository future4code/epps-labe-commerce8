import React from "react";
import styled from "styled-components";

const BigContainer = styled.div`
  background-color: rgb(20, 35, 100);
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const FilterSelect = styled.div``;

export class Filter extends React.Component {
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

  orderProducts = (a, b) => {
    if (this.state.order === "precoCrescente") {
      return a.value - b.value;
    } else if (this.state.order === "precoDecrescente") {
      return b.value - a.value;
    } else {
      return a.id - b.id;
    }
  };

  filterName = (list) => {
    list = list.filter((product) => {
      if (product.name.includes(this.state.searchProduct)) {
        return true;
      }
    });
  };

  render() {
    return (
      <BigContainer>
        <FilterContainer>
        <h2>Filtros:</h2>
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
        <FilterContainer>
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
        </FilterContainer>
      </BigContainer>
    );
  }
}

export default Filter;
