import React, { Component } from 'react';
import { Link } from "react-router-dom";
import http from 'axios';
const imagesPath = require.context('../Assets/images/postImages', true);

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: []
        }
    }

    componentDidMount() {
        http.get('/api/GetProductsOrServices', { params: { product: 0 } }).then(response => {
            this.setState({ services: response.data })
        })
    }

    render() {
        return this.state.services.map((x, index) =>
            <div className="card post-width d-inline-block" key={index}>
                <img className="card-img-top" alt={x.title} src={imagesPath(x.imagePath, true)} />
                <div className="card-body text-left">
                    <h5 className="card-title border-bottom mb-1 pb-1">{x.title}</h5>
                    <p className="card-text">
                        {x.text.substring(0, 100) + ' ...'}
                    </p>
                    <Link to={"/service/" + x.id} className="btn btn-primary">Read more</Link>
                </div>
            </div>
        )
    }
}