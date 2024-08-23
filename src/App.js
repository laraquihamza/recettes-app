import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types';

// CSS
import './App.css'
import Header from './components/Header';
import recettes from './recettes';
import Admin from './components/Admin';
import Card from './components/Card';
import base from './base';
import withFirebase from './hoc/withFirebase';
import { getQueriesForElement } from '@testing-library/dom';
import { ColorContext } from './components/Color';
import ColorProvider from './components/Color';
const App=({
  match,
  majRecette,
  recettes,
  ajouterRecette,
  chargerExample,
  supprimerRecette

})=>{


    const cards=Object.keys(recettes).
    map(key=><Card key={key} details={recettes[key]}></Card>)
    return (
      <ColorProvider>
      <div className='box'>
        <Header pseudo={match.params.pseudo}/>
        <div className='cards'>
          {cards}
        </div>
        <Admin 
        pseudo={match.params.pseudo}
        majRecette={majRecette}
        recettes={recettes}
        ajouterRecette={ajouterRecette}
        chargerExample={chargerExample}
        supprimerRecette={supprimerRecette}
        />
      </div>
      </ColorProvider>
    )
  }
  App.propTypes={
    match:PropTypes.object.isRequired,
    majRecette:PropTypes.func.isRequired,
    recettes:PropTypes.object.isRequired,
    ajouterRecette:PropTypes.func.isRequired,
    chargerExample:PropTypes.func.isRequired,
    supprimerRecette:PropTypes.func.isRequired
    }
    
const WrappedComponent=withFirebase(App)
export default WrappedComponent
