import React from "react";
import styled from "styled-components";

const BigContainer = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
`;

const FilterContainer = styled.div`
`;

const FilterSelect = styled.div`
`
    

export class Filter extends React.Component {
  state = {
    minValue: "",
    maxValue: "",
    searchProduct: "",
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

  render() {
    return (
      <BigContainer>
        <FilterContainer>
          <label>Valor Mínimo</label>
          <input
            type={"number"}
            value={this.state.minValue}
            onChange={this.onChangeMinValue}
          ></input>
        </FilterContainer>
        <FilterContainer>
          <label>Valor Máximo</label>
          <input
            type={"number"}
            value={this.state.maxValue}
            onChange={this.onChangeMaxValue}
          ></input>
        </FilterContainer>
        <FilterContainer>
          <label>Buscar Produto</label>
          <input
            type={"text"}
            value={this.state.searchProduct}
            onChange={this.onChangeSearchProduct}
          ></input>
        </FilterContainer>

        <FilterSelect>
          <select name="order">
            <option>Preço Crescente</option>
            <option>Preço Descrescente</option>
          </select>
        </FilterSelect>
      </BigContainer>
        
      
    );
  }
}

export default Filter;
