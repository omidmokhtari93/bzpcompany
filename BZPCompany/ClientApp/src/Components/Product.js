import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import http from 'axios';
import '../Assets/scss/components.scss';
const rootPath = require.context('../Assets/images/postImages', true);

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }

    componentDidMount() {
        http.get('/api/GetProduct', { params: { id: this.props.match.params.id } }).then(response => {
            this.setState({ product: response.data })
        })
    }

    render() {
        let data = this.state.product;
        if (data !== null) {
            return (
                <div className="card card-body">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="img-thumbnail product-image" style={{ width: '200px' }} alt={data.title} src={rootPath(data.imagePath, true)} />
                        </div>
                        <div className="col-lg-9">
                            <div className="media-body text-left">
                                <h5 className="mt-0">{data.title}</h5>
                                <hr className="mr-3" />
                                <div style={{ whiteSpace: 'pre-wrap' }}>
                                    {data.text}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}
export default withRouter(Product);