import React from "react";
import Filter from './Components/Filter/Filter'
import Products from "./Components/Products/Products"
import styled from 'styled-components'

export const MainContainer = styled.div`
`

class App extends React.Component {
 

  componentDidMount () {

  }

  componentDidUpdate() {

  }

  onChangeFilter () {
  
  }

 
  render () {
  
    return (
      <MainContainer>
        {/* <Filter /> */}
        <Products/>
        {/* <Filter />   */}
      </MainContainer>
    )
  }


}

export default App;
