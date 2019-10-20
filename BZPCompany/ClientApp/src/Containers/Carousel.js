import React, { Component } from 'react';
import http from 'axios';
const imagesPath = require.context('../Assets/images/postImages', true);

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carousel: []
        }
    }

    componentDidMount() {
        http.get('/api/GetProductsOrServices', { params: { product: -1 } }).then(response => {
            this.setState({ carousel: response.data })
        })
    }

    render() {
        let winWidth = () => { return window.innerWidth < 768 };
        return (
            <div id="carousel-example-2" className="carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    {this.state.carousel.map((x, index) => <li key={index} data-target="#carousel-example-2" data-slide-to="0" className={index === 0 ? "active" : ""}></li>)}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {this.state.carousel.map((x, index) =>
                        <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                            <div className="view">
                                <img className="d-block w-100" src={imagesPath(x.imagePath, true)}
                                    alt={x.title} />
                                <div className="mask rgba-black-light"></div>
                            </div>
                            <div className="carousel-caption">
                                <h3><span className="badge badge-primary font-weight-light">{x.title}</span></h3>
                                <h5><span className="badge badge-primary font-weight-lighter">
                                    {winWidth() ? x.text.substring(0, 30) + ' ...' :
                                        x.text.substring(0, 70) + ' ...'}</span>
                                </h5>
                            </div>
                        </div>
                    )}
                </div>
                <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div >
        )
    }
}