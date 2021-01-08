import React from "react";
import Filter from "./Components/Filter/Filter";
import SectionProducts from "./Components/Card/SectionProducts";
import Cart from "./Components/Cart/Cart";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 5vh;
  align-items: center;
`;

const CartButton = styled.div`
  width: 90px;
  height: 90px;
  position: fixed;
  background-image: url("https://www.flaticon.com/svg/static/icons/svg/34/34585.svg");
  background-repeat: no-repeat;
  border-radius: 50%;
  background-size: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 5px;
  bottom: 20px;
  right: 20px;
  background-position: center;
`;

const DivApp = styled.div`
  display:flex;
  flex-direction: row;
`;

export class App extends React.Component {
  state = {
    section: "",
    viewCart: false,
    cartList: [],
  };

  // Adicionar produto ao carrinho.
  productAddCart = (newProduct) => {
    let list = [...this.state.cartList];
    let productShow = this.state.cartList.findIndex(
      (product) => product.id === newProduct.id
    );
    if (productShow > -1) {
      list[productShow].quantity++;
    } else {
      newProduct.quantity = 1;
      list.push(newProduct);
    }
    this.setState({ cartList: list });
  };

  // Remover produto do carrinho.
  deleteProduct = (id) => {
    let list = [...this.state.cartList];
    let product = this.state.cartList.findIndex((product) => product.id === id);
    list.splice(product, 1);
    this.setState({ cartList: list });
  };

  // Para mostrar o carrinho.
  receiveSection = (sectionPress) => {
    this.setState({ section: sectionPress });
    if (sectionPress === "viewCart") {
      this.setState({ viewCart: true });
    } else {
      this.setState({ viewCart: false });
    }
  };

  // Ao clicar no icone do carrinho.
  onClickCart = (event) => {
    this.setState({ viewCart: !this.state.viewCart });
    this.setState({ section: event.target.getAttribute("value") });
  };

  render() {
    if (this.state.viewCart) {
      return (
        <DivApp>
          {/* <Header state={this.state.section} info={this.receiveSection}>
            {" "}
            <h1>LabECommerce</h1>{" "}
          </Header> */}
          <Filter></Filter>
          <SectionProducts
            section={this.state.section}
            passProduct={this.productAddCart}
          />
          <CartButton onClick={this.onClickCart} />
          <Cart list={this.state.cartList} delete={this.deleteProduct} />
        </DivApp>
      );
    }

    return (
      <DivApp>
        {/* <Header state={this.state.section} info={this.receiveSection}>
          {" "}
          <h1>LabECommerce</h1>{" "}
        </Header> */}
        <Filter></Filter>
        <SectionProducts
          section={this.state.section}
          passProduct={this.productAddCart}
        />
        <CartButton onClick={this.onClickCart} />
      </DivApp>
    );
  }
}

export default App;
