import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModals';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Axios from 'axios';
const request = require('request');
class App extends Component {
  
  componentWillMount(){
    // let result;
    // request('https://jsonplaceholder.typicode.com/users', function(error, firstResponse, firstBody){
    //   if(error){
    //     console.log(error)
    //   }else{
    //     console.log('firstBody-----', firstBody)
    //     request('https://jsonplaceholder.typicode.com/todos', function(error, secondResponse, secBody){
    //       if(error){
    //         console.log(error)
    //       }else{
    //         console.log('secBody', secBody)
    //       }
    //     })
    //   }
    // })
    // console.log('outloop', result)
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
        console.log(response.data)
        Axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
          console.log(res.data)
        })
      })
      .then(function(response){
        console.log(response)
      })
      .catch(function(err){
        console.log(err)
      })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
