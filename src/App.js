import React from "react";
import Filter from './Components/Filter/Filter'

class App extends React.Component {
  state = {
    productsList: [
      {
        id: 1,
        name: "Qualquer um",
        value: 100,
        imageUrl: '',
      },
      {
        id: 2,
        name: "Qualquer um",
        value: 100,
        imageUrl: "",
      },
      {
        id: 3,
        name: "Qualquer um",
        value: 100,
        imageUrl: "",
      },
      {
        id: 4,
        name: "Qualquer um",
        value: 100,
        imageUrl: "",
      },
      {
        id: 5,
        name: "Qualquer um",
        value: 100,
        imageUrl: "",
      },
      {
        id: 6,
        name: "Qualquer um",
        value: 100,
        imageUrl: "",
      },
      {
        id: 7,
        name: "Qualquer um",
        value: 100,
        imageUrl: "",
      },
      {
        id: 8,
        name: "Qualquer um",
        value: 100,
        imageUrl: "",
      },
    ],
  };

  componentDidMount () {

  }

  componentDidUpdate() {

  }

  onChangeFilter () {
  
  }

  render () {
    return (
      <div>
        <Filter />
      </div>
    )
  }


}

export default App;
