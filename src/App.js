import React from "react";
import SectionProducts from "./Components/Card/SectionProducts";
import Cart from "./Components/Cart/Cart";
import styled from "styled-components";

const CartButton = styled.div`
  width: 90px;
  height: 90px;
  position: fixed;
  background-color: #FFF;
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
  background-color: #ebeff3;
  color: black;
  display: flex;
  padding: 10px;
`;

export class App extends React.Component {
  state = {
    section: "",
    viewCart: false,
    cartList: [],
  };

  componentDidUpdate = () => {
    localStorage.setItem('viewCart', JSON.stringify(this.state.cartList))
  }

  componentDidMount = () => {
    const cartMount = JSON.parse(localStorage.getItem("viewCart"))
    if (cartMount !== null) {
      this.setState({cartList: cartMount})
    }
  }

  // Adiciona produto ao carrinho.
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

  // Remove produto do carrinho.
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
