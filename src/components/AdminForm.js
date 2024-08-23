import React, { Component } from 'react';

const AdminForm=(  
    {majRecette,
    id,
    recettes,
    supprimerRecette
}
)=>{
    const key=id.toString()
    const recette=recettes[key]
    const handleChange=(event,key)=>{
        const {name,value}=event.target
        const recette=recettes[key]
        recette[name]=value
        console.log(recette)
        console.log(key)
        majRecette(key,recette)
    }
    console.log(recettes)
    return(
        <div className="card">
            <form className="admin-form">
                <input type="text" value={recette["nom"]} onChange={e=>handleChange(e,key)} name="nom" placeholder="Nom de la recette"/>
                <input type="text" name="image" value={recette["image"]} onChange={e=>handleChange(e,key)}  placeholder="Nom de l'image"/>
                <textarea type="text"  name="ingredients" value={recette["ingredients"]} onChange={e=>handleChange(e,key)} placeholder="Liste des ingrédients"/>
                <textarea type="text"  name="instructions" value={recette["instructions"]} onChange={e=>handleChange(e,key)} placeholder="Liste des instructions"/>
            </form>
            <button onClick={()=>supprimerRecette(key)}>Supprimer</button>
        </div>
    )
}

export default AdminForm;