/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thListeEtud, tdArray } from "variables/Variables.jsx";
import { Route, Switch } from "react-router-dom";
import routes from "routesEns.js";
import SidebarEns from "components/SidebarEns/SidebarEns.jsx";
import image from "assets/img/sidebar-3.jpg";
import { Link } from 'react-router-dom';

class TableGroupEns extends Component {
  constructor(props)
    {
        super(props)
        this.state={
          _notificationSystem: null,
          image: image,
          color: "black",
          hasImage: false,
          fixedClasses: "dropdown show-dropdown open",
          etudiants : [
              {
                  nom: "Hamdine",
                  prenom: "Israa",
                  matricule: 1
              },
              {
                nom: "Khouas",
                prenom: "Ouerdia",
                matricule: 2
            },
            {
                nom: "Khouas",
                prenom: "Ouerdia",
                matricule: 2
            }
             

          ],
          groupe : {},
        }
    }
    
    getRoutes = routes => {
      return routes.map((prop, key) => {
        if (prop.layout != "/admin") {
          return (
            <Route
              path={ prop.path}
              render={props => (
                <prop.component
                  {...props}
                  handleClick={this.handleNotificationClick}
                />
              )}
              key={key}
            />
          );
        } else {
          return null;
        }
      });
    };
    getBrandText = path => {
      for (let i = 0; i < routes.length; i++) {
        if (
          this.props.location.pathname.indexOf(
            routes[i].layout + routes[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
      }
      return "Brand";
    };
    handleImageClick = image => {
      this.setState({ image: image });
    };
    handleColorClick = color => {
      this.setState({ color: color });
    };
    handleHasImage = hasImage => {
      this.setState({ hasImage: hasImage });
    };
    handleFixedClick = () => {
      if (this.state.fixedClasses === "dropdown") {
        this.setState({ fixedClasses: "dropdown show-dropdown open" });
      } else {
        this.setState({ fixedClasses: "dropdown" });
      }
    };
   
    componentDidUpdate(e) {
      if (
        window.innerWidth < 993 &&
        e.history.location.pathname !== e.location.pathname &&
        document.documentElement.className.indexOf("nav-open") !== -1
      ) {
        document.documentElement.classList.toggle("nav-open");
      }
      if (e.history.action === "PUSH") {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainPanel.scrollTop = 0;
      }
    }
  render() {
    const etudiants=this.state.etudiants
    const id_groupe = this.props.match.params.id_groupe
    return (
      <div className="wrapper">
    <SidebarEns {...this.props} routes={routes} image={this.state.image}
        color={this.state.color}
        hasImage={this.state.hasImage}/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          
          <Switch>{this.getRoutes(routes)}</Switch>
          <div className="content">
              <h2 className="nomgrp">Groupe : {id_groupe} </h2>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                ctTableFullWidth
                ctTableResponsive
                content={
                    
                  <Table striped hover>
                      
                    <thead>
                      <tr>
                        {thListeEtud.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                  
                    <tbody> 
                         {etudiants.map(etudiant=> {
                         return(
                         <tr>
                           <td> {etudiant.nom}</td>
                           <td> {etudiant.prenom}</td>
                           <td> {etudiant.matricule}</td>
                          </tr>
                            )
                                
                 } )}
  
                    </tbody>
                  </Table>
                }
              />
            </Col>   
          </Row>
        </Grid>
      </div>
        </div>
      
      </div>
    );
  }
}

export default TableGroupEns;
