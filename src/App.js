import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from "./Navbar";
import firebase from "firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [],
        loading: true    /* Just to display loading... while making API calls */
    }
  }

  handleQtyIncrease = (product) => {

      const {products} = this.state;
      let NewProducts = products.map((item) => {      /* Dififcult way to solve this, there is easy way by using .IndexOf()  */
          if (item.title === product.title) {
              product.qty = product.qty + 1;
              return product;
          } else {
              return item;
          }
      })
      this.setState((prevState) => {
          return {
              products : NewProducts
          }
      })
    }

    handleQtyDecrease = (product) => {
        const {products} = this.state;
        let index = products.indexOf(product);
        if (products[index].qty === 0) {
            return ;                            /* If count is 0, don't go further down, just do nothing  */
        }
        products[index].qty = products[index].qty - 1;
        this.setState((prevState) => {
            return {
                products
            }
        })
    }


    handleDeleteProd = (product) => {
        const {products} = this.state;
        let index = products.indexOf(product);
        products.splice(index, 1);                /* Remove the product from the list */
        this.setState((prevState) => {
            return {
                products
            }
        })
    }

    getCountOfCartItems = () => {
      const {products} = this.state;
      let count=0;
      products.map((item) => {
          count = count + item.qty;
          /*return count;*/     /* Return not required since we are directly updating count variable declared at the top  */
      })
        console.log("count ", count);
        return count;
    }

    getCartTotal = () => {
        const {products} = this.state;
        let price=0;
        products.map((item) => {
            price = price + item.price*item.qty;
            /*return price;*/     /* Return not required since we are directly updating count variable declared at the top  */
        })
        console.log("price ", price);
        return price;
    }

  componentDidMount() {
    /*firebase
        .firestore()
        .collection('products')
        .get()
        .then((DBSnapshot) => {
          const products = DBSnapshot.docs.map((item) => {
            let data = item.data();
            data['id'] = item.id;    /!* Remember every item (which is a document) in firebase has an unique id *!/
            console.log(data);
            return data;
          })
          this.setState((prevState) => {
           return {
               products : products,
               loading: false
           }
          })
        })*/
       firebase
          .firestore()
          .collection('products')
          .onSnapshot((DBSnapshot) =>{
              const products = DBSnapshot.docs.map((item) => {
                  let data = item.data();
                  data['id'] = item.id;    /* Remember every item (which is a document) in firebase has an unique id */
                  console.log(data);
                  return data;
              })
              this.setState((prevState) => {
                  return {
                      products : products,
                      loading: false
                  }
              })
          })

  }

  render() {
    return (
      <div>
          <Navbar count={this.getCountOfCartItems()} />
          <Cart
              products = {this.state.products}
              handleQtyIncrease = {this.handleQtyIncrease}
              handleQtyDecrease = {this.handleQtyDecrease}
              handleDeleteProd = {this.handleDeleteProd}
          />
          {this.state.loading && <h1>Loading....</h1>}   {/* Conditional Rendering. Show Loading... if loading variable is true */}
          <div style={{ padding: 10, fontSize: 20 }}>
              TOTAL : {this.getCartTotal()}
          </div>
      </div>

    );
  }
}

export default App;