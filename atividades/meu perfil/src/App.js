import React, { Component } from 'react';
import './App.css';
import Perfil from './Perfil'
import Dados from './Dados'

class App extends Component {

  render() {
    return (
      <div>
        <section>
        <h1>Meu Perfil</h1>
        <Perfil />
        <Dados />
        </section>
        <footer>Esse é o rodapé</footer>
      </div>
    )
  }

};

export default App;