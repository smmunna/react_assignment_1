import './App.css';
import './css/Products.css'
import Products from './Components/Products';
import { useReducer } from 'react';

function App() {
  const products = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      rating: {
        rate: 4.7,
        count: 500
      }
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      rating: {
        rate: 2.1,
        count: 430
      }
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold",
      price: 695,
      description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      rating: {
        rate: 4.6,
        count: 400
      }
    },
    {
      id: 6,
      title: 'Solid Gold Petite Micropave ',
      price: 168,
      description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      rating: {
        rate: 3.9,
        count: 70
      }
    }
  ]
  return (
    <div className="App">
      <h2>Store Products</h2>
      <div className="row">
      {
      products.map((value,index)=>{
        return <div className="col-lg-4">
          <Products id={value.id} title={value.title} price={value.price} image={value.image} description={value.description} rating={value.rating.rate} />
        </div>
      })
    }
      </div>
     
    </div>
  );
}

export default App;
