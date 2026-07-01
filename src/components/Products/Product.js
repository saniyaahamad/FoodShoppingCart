import React, { Component } from "react";
import img1 from "../images/pizza.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import "./Product.css";

const products = [
  {
    image: img1,
    name: "Pizza",
    price: 500,
  },
  {
    image: img2,
    name: "Manchurian",
    price: 200,
  },
  {
    image: img3,
    name: "Paneer Chilli",
    price: 400,
  },
  {
    image: img4,
    name: "Noodles",
    price: 300,
  },
  {
    image: img5,
    name: "Vada Pav",
    price: 100,
  },
  {
    image: img6,
    name: "Grill Paneer Chilli",
    price: 600,
  },
];

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      total: 0,
    };
  }

  add = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product.name],
      total: prevState.total + product.price,
    }));
  };

  remove = (product) => {
    this.setState((prevState) => {
      const cart = [...prevState.cart];
      const index = cart.indexOf(product.name);

      if (index !== -1) {
        cart.splice(index, 1);

        return {
          cart,
          total: prevState.total - product.price,
        };
      }

      return null;
    });
  };

  getTotal = () => {
    return this.state.total.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1>Food Shopping Cart</h1>

          <div className="cart-info">
            <h3> Items: {this.state.cart.length}</h3>
            <h3> Total: ₹{this.getTotal()}</h3>
          </div>
        </div>

        <div className="products">
          {products.map((product) => (
            <div className="card" key={product.name}>
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />

              <h2>{product.name}</h2>

              <h3>₹{product.price}</h3>

              <div className="buttons">
                <button onClick={() => this.add(product)}>Add</button>

                <button onClick={() => this.remove(product)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Product;