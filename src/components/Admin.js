import React, { Component } from 'react';
import AjouterRecette  from './AjouterRecette';
import AdminForm from './AdminForm';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import Login from './Login';
import base, {firebaseApp} from "../base";
class Admin extends Component {
    state={
        uid:null,
        chef:null
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.handleAuth({user})
            }
        })

    }
    handleAuth= async authData=>{
        var box
        base.ref(`/${this.props.pseudo}`).on('value', (snapshot) => {
             box=snapshot.val()
            if(!box || !box.chef){
                base.ref(`/${this.props.pseudo}/chef`).set({data:authData.user.uid})
            }
            this.setState({
                uid:authData.user.uid,
                  chef:box.chef.data|| authData.user.uid
              }
            )
  
          }, (errorObject) => {
          });

    }
    authenticate=()=>{
        const authProvider= new firebase.auth.FacebookAuthProvider
        firebaseApp.auth()
        .signInWithPopup(authProvider)
        .then(this.handleAuth)
    }
    logout= async()=>{
        await firebase.auth().signOut()
        this.setState({uid:null})
    }
    render() {
        const{recettes,ajouterRecette,majRecette,chargerExample,supprimerRecette}=this.props
        const logout=<button onClick={this.logout}>Deconnexion</button>
        //if not connected
        if(!this.state.uid){
            return <Login authenticate={this.authenticate}></Login>
        }
        if(this.state.uid!==this.state.chef){
            return <div>Tu n'est pas le chef de cette boite
                {logout}
            </div>
        }


        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette}></AjouterRecette>
                {
                    Object.keys(recettes).map(key=><AdminForm
                    majRecette={majRecette}
                    supprimerRecette={supprimerRecette}
                    key={key}
                    id={key}
                    recettes={recettes}
                    />)
                }
            <footer>
                <button onClick={chargerExample}>Charger</button>
                {logout}
            </footer>
            </div>
        );
    }
}

export default Admin;