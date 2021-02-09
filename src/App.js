import React, {Component} from 'react';  
import './App.css';
import Bmi from './komponen//Bmi'
import Cicilan from './komponen/Cicilan'
import Harga from './komponen//Harga'
import Konver from './komponen/Konver'

class App extends Component{
  render(){
    return (
      
    <div className="App container"> 
        <Bmi/>
        <Cicilan/>
        <Harga/>
        <Konver/>
        
    </div>
    );
  }
}

export default App;
