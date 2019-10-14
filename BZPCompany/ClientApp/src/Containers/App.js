import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import header from '../Assets/images/header.jpg'
import zinc from "../Assets/images/zinc-oxide.jpg";
import tit_oxide from '../Assets/images/tit-oxide.jpg';
import './app.scss'

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{ backgroundColor: '#e3f2fd' }}>
            <a className="navbar-brand" href="http://bzpcompany.eu">BZPCompany</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link><span className="nav-link">Home</span></Link>
                </li>
                <li className="nav-item">
                  <Link><span className="nav-link" href="#">Our Products</span></Link>
                </li>
                <li className="nav-item">
                  <Link><span className="nav-link" href="#">Contact Us</span></Link>
                </li>
                <li className="nav-item">
                  <Link><span className="nav-link" href="#">About Us</span></Link>
                </li>
              </ul>
              <div className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
              </div>
            </div>
          </nav>
          <div className="header">
            <img src={header} className="header-image" />
            <div className="absolute-text">
              <div className="text">
                Various buttons are supported as part of these navbar forms, too.
                This is also a great reminder that vertical alignment utilities can be used to align different sized elements.
              </div>
              <div className="buttons">
                <button className="btn btn-outline-primary">See Our Products</button>
              </div>
            </div>
          </div>
          <div className="main-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="card m-auto">
                  <img className="card-img-top" src={zinc} alt="zinc oxide" />
                  <div className="card-body">
                    <h5 className="card-title">Zinc Oxide (ZNO)</h5>
                    <p className="card-text">
                      Zinc oxide is one of the richest nanostructures in terms of diversity in morphology and application ...
                    </p>
                    <a href="#" className="btn btn-primary">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card m-auto">
                  <img className="card-img-top" src={tit_oxide} alt="titanium dioxide" />
                  <div className="card-body">
                    <h5 className="card-title">Titanium Dioxide</h5>
                    <p className="card-text">
                      It is used in water purification, decolourization, deodorizing, making special ceramics, destroying ...
                    </p>
                    <a href="#" className="btn btn-primary">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer bg-primary">
            <div className="row">
              <div className="col-lg-6">
                <h4>Contact us</h4>
                <div>
                  <span className="fa fa-home mr-1"></span>Address : <br />8th flooor office 808
                  Miletichova 550/1,<br />
                  82108 Bratislava
                  Slovak Republic
                </div>
                <hr className="bg-light" />
                <div>
                  <span className="fa fa-phone mr-1"></span> Phone numbers: <br />
                  +421911216821 - +4219409788408
                </div>
                <hr className="bg-light" />
                <div>
                  <span className="fa fa-email"></span>Email : <br />
                  <a href="mailto:info@bzpcompany.eu" classNam="text-default">info@bzpcompany.eu</a>
                </div>
              </div>
              <div className="col-lg-6">
                <p>Contact us</p>
                <p>
                  123
                  </p>
              </div>
            </div>
          </div>
        </div >
        <Switch>
          <Route exact path="">

          </Route>
        </Switch>
      </Router>
    );
  }
}
