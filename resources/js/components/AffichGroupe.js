import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

export default class AffichGroupe extends Component {

    constructor()
    {
        super()
        this.state={
            etudiants : [],
            groupe : {},
        }
    }

componentDidMount()
{
    const id_groupe = this.props.match.params.id_groupe
    this.groupe = id_groupe
    console.log("on mount")
    
    // axios.get(`api/affichgroupe/${id_groupe}`).then(response=> 
    // {
    //     this.setState({
    //         etudiants : response.data.data,
    //         })
    // })
}

    render() {
        const id_groupe = this.props.match.params.id_groupe
        axios.get(`api/affichgroupe/${id_groupe}`).then(response=> 
            {
                this.setState({
                    etudiants : response.data.data,
                    })
            })
        console.log('on a fait la requete')
        if (etudiants==null)
        {
            console.log('bah c\'est null')
        }

        return (

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">

                            <div className="card-header">Etudiants </div>
                            {/* {etudiants.map(etudiant=>(
                                    <div key={etudiant.id} className="card-body">{etudiant.nom} {etudiant.prenom}</div>
                                ))} */}
                                

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


