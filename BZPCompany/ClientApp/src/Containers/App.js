import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './app.scss'
import Footer from '../Containers/Footer';
import Carousel from '../Containers/Carousel';
import Products from '../Components/Products';
import Product from '../Components/Product';
import Home from '../Components/Home';
import ContactUs from '../Components/Contactus';
import Service from '../Components/Service';
import Services from '../Components/Services';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="http://bzpcompany.eu">BZPCompany</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/products" exact className="nav-link" activeClassName="active">Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" exact className="nav-link" activeClassName="active">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contactus" exact className="nav-link" activeClassName="active">Contact Us</NavLink>
                </li>
              </ul>
              <div className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
              </div>
            </div>
          </nav>
          <Carousel />
          <div className="main-body">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route exact path="/product/:id">
                <Product />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/service/:id">
                <Service />
              </Route>
              <Route exact path="/contactus">
                <ContactUs />
              </Route>
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div >
      </Router >
    );
  }
}
