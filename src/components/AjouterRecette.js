import React, { Component } from 'react';

class AjouterRecette extends Component {
    state={
        nom:"",
        image:"",
        ingredients:"",
        instructions:""
    }
    handleChange=event=>{
        const{name,value} =event.target
        this.setState({[name]:value})
    }
    handleSubmit= event=>{
        event.preventDefault()
        const recette={... this.state}
        this.props.ajouterRecette(recette)
        this.setState( {
            nom:"",
            image:"",
            ingredients:"",
            instructions:""
        }
    )
    }
    render() {
        return (
            <div className="card">
                <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
                    <input  name="nom" value={this.state.nom} onChange={this.handleChange} type="text" placeholder="Nom de la recette"/>
                    <input name="image" value={this.state.image} onChange={this.handleChange} type="text" placeholder="Nom de l'image"/>
                    <textarea name="ingredients" value={this.state.ingredients} onChange={this.handleChange} placeholder="Liste des ingrédients" rows="3"/>
                    <textarea name="instructions" value={this.state.instructions} onChange={this.handleChange} placeholder="Liste des instructions" rows="3"/>
                    <button type="submit">Ajouter une recette</button>
                </form>
            </div>
        );
    }
}

export default AjouterRecette;