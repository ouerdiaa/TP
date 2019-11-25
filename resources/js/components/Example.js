import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    constructor()
    {
        super()
        this.state={
            etudiants : []
        }
    }
    componentDidMount()
{
    
    axios.get('api/affich').then(response=> {
        this.setState({etudiants: response.data.data})
    }
        )
}

    render() {
        const etudiants=this.state.etudiants
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>
                            <div>
                                {etudiants.map(etudiant=>(
                          <div key={etudiant.id} className="card-body">{etudiant.nom} {etudiant.prenom}</div>
                             ))}
                            </div>
                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
