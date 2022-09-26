import React, { Component } from 'react';
import './Dados.css';

class Dados extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Clique para mostrar Informações'
    };
 
    this.entrar = this.entrar.bind(this);
    this.resumo = this.resumo.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Eduardo da Silva',
      dados: 'edudocross@gmail.com | (13)997610393 | Santos - SP',
      formacao: 'Estudante',
      exp: 'Aprendendo C#, JAVA, Node, React, Banco de Dados e etc'
    });
  }
  resumo(){
    this.setState({
      resumo: 'Esse é um resumo do Eduardo, não tem nada demais pois é só um teste'
    })
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.dados}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.exp}</h4>
          <button onClick={this.resumo}>Mostrar Resumo</button>
          <h1>{this.state.resumo}</h1>
        </center>
      </div>
    );
  }
}
 
export default Dados;