import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                    <Link className="navbar-brand" to={"/"}>MyScholarApp</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    </div>
                    </div>
                </nav>
                <div className="auth-wrapper">
                 <div className="auth-inner">
                 
                 <form>
                <h3>Se connecter</h3>

                <div className="form-group">
                    <label>Adresse E-mail</label>
                    <input id="mail" type="email" className="form-control" placeholder="E-mail" />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input id="mdp" type="password" className="form-control" placeholder="Mot de passe" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi</label>
                    </div>
                </div>
                <a id="se-connecter" href="/mesabsences" class="btn btn-primary btn-block" role="button">Se connecter</a>
                <p className="forgot-password text-right">
                    Mot de passe <a href="#">oublié?</a>
                </p>
            </form>
            </div>
            </div>
            </div>
           
        );
    }
}
