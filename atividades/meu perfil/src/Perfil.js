import React, { Component } from 'react';
import './Perfil.css';
//import img from './Quintao.JPG';

class Perfil extends Component {
    render() {
              
      let img = 'https://media-exp1.licdn.com/dms/image/C4D03AQFQECJ6tpvsOw/profile-displayphoto-shrink_800_800/0/1583510808811?e=1668038400&v=beta&t=v8V7haKA8-sY-0PfydXNAGdNZ47hAMgqenLLwko5HNY'
      
      return (
        <img src={img} width={200} height={200} />
      );
    }
  }

  export default Perfil;