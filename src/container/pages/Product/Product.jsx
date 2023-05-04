import React, {Component, Fragment} from "react";
import CardProduct from "./CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 0
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }

  render () {
    return (
      <Fragment>

        <p>Cart: {this.state.order}</p>

        <CardProduct onCounterChange={(value) => this.handleCounterChange(value) } />

        <hr/>

      </Fragment>
    )
  }
}

export default Product;