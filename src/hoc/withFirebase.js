import React, { Component } from 'react';
import WrappedComponent from '../components/Connexion';
import base from '../base';
import recettes from '../recettes';
const withFirebase=WrappedComponent=>(
    class HOC extends Component {
        state={
            pseudo: this.props.match.params.pseudo,
            recettes:{}
        }
        componentDidMount(){
            base.ref(`/${this.state.pseudo}/recettes`).on('value', (snapshot) => {
              const recettes=snapshot.val()
              if(recettes){
                this.setState({recettes})
              }
            }, (errorObject) => {
            });
            console.log("MasonMount")
        
          }
          chargerExample=()=>{
            this.setState({recettes})
          }
          componentDidUpdate(){
            base.ref(`/${this.state.pseudo}/recettes`).set(this.state.recettes)
            console.log("Update")
        
          }
          ajouterRecette= recette=>{
            const recettes={ ... this.state.recettes}
            recettes[`recette-${Date.now()}`]= recette
            this.setState({recettes})
          }
        
          majRecette= (key,newRecette)=>{
            var recettes={ ... this.state.recettes}
            recettes[key]=newRecette
            this.setState({recettes})
          }
          supprimerRecette=(key)=>{
            var recettes={... this.state.recettes}
            delete recettes[key]
            this.setState({recettes})
          }
        render() {
            return (
                <WrappedComponent
                recettes={this.state.recettes}
                ajouterRecette={this.ajouterRecette}
                majRecette={this.majRecette}
                supprimerRecette={this.supprimerRecette}
                chargerExample={this.chargerExample}
                {... this.props}

                />
            );
        }
    }
    
)

export default withFirebase;