import React, { Component } from 'react';
import '../Assets/scss/components.scss'
import http from 'axios';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            whatWeDo: []
        }
    }

    componentDidMount() {
        http.get('/api/GetPosts').then(response => {
            this.setState({ whatWeDo: response.data })
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <h4 className="footer-h4 text-primary">Contact us</h4>
                    <div>
                        <span className="fa fa-envelope mr-1"></span>Email : <br />
                        <a href="mailto:info@bzpcompany.eu" className="email-text">info@bzpcompany.eu</a>
                    </div>
                    <hr className="bg-light" />
                    <div>
                        <span className="fa fa-phone mr-1"></span> Phone numbers: <br />
                        +421911216821 - +421940978408
                    </div>
                    <hr className="bg-light" />
                    <div>
                        <span className="fa fa-home mr-1"></span>Address : <br />8th flooor office 808
                        Miletichova 550/1,82108
                        <br />Bratislava
                        Slovak Republic
                    </div>
                </div>
                <div className="col-lg-6 what-we-do">
                    <h4 className="footer-h4 text-primary">What we do</h4>
                    {this.state.whatWeDo.map((x, index) => <span key={index} className="badge badge-warning">{x.title}</span>)}
                </div>
            </div>
        )
    }
}
