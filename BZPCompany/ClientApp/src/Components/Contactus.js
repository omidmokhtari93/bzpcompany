import React, { Component } from 'react';
import Wrapper from '../Shared/Wrapper'
import http from 'axios';
import "../Assets/scss/components.scss";
import loading from '../Assets/images/loading.gif'

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            phone: '',
            message: '',
            success: false,
            loading: false,
            error: false
        }
    }

    handleInputs = (element) => {
        this.setState({ success: false, error: false, loading: false });
        let name = element.target.name;
        switch (name) {
            case 'fullname':
                this.setState({ fullname: element.target.value })
                break;
            case 'email':
                this.setState({ email: element.target.value })
                break;
            case 'phone':
                this.setState({ phone: element.target.value })
                break;
            case 'message':
                this.setState({ message: element.target.value })
                break;
            default:
                break;
        }
    }

    postMessage = () => {
        this.setState({ loading: true });
        let contact = {
            Name: this.state.fullname,
            Phone: this.state.phone,
            Email: this.state.email,
            Message: this.state.message
        }
        http.post('/api/SendMail', contact).then(response => {
            if (response.data) {
                this.setState({ fullname: '', email: '', phone: '', message: '', success: true, loading: false, error: false })
            } else {
                this.setState({ error: true, loading: false, success: false });
            }
        })
    }

    render() {
        return (
            <Wrapper>
                <div className="card border-primary rounded-0">
                    <div className="card-header p-0">
                        <div className="bg-primary text-white text-center py-2">
                            <h3><i className="fa fa-envelope"></i> Contact us</h3>
                            <p className="m-0 px-2">Do you have any questions?<br />
                                Please do not hesitate to contact us directly.
                             Our team will come back to you within a matter of hours to help you.</p>
                        </div>
                    </div>
                    <div className="card-body p-3">
                        <div className="form-group">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                </div>
                                <input type="text" name="fullname" onChange={(e) => this.handleInputs(e)}
                                    value={this.state.fullname} className="form-control" placeholder="Fullname" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                                </div>
                                <input type="email" name="email" onChange={(e) => this.handleInputs(e)}
                                    value={this.state.email} className="form-control" placeholder="Email address" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fa fa-phone text-info"></i></div>
                                </div>
                                <input type="phone" name="phone" onChange={(e) => this.handleInputs(e)}
                                    className="form-control" value={this.state.phone} placeholder="Phone number" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                </div>
                                <textarea name="message" rows="3" value={this.state.message} onChange={(e) => this.handleInputs(e)}
                                    className="form-control" placeholder="Your messsage ..." required></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            {this.state.success && (<div className="text-success mb-1 font-weight-bold">
                                Your message has been sent,<br />We'll check your request and call you soon.
                                </div>)}
                            {this.state.loading && <img src={loading} className="loading" />}
                            {this.state.error && <div className="text-danger mb-1 font-weight-bold">Error while sending message</div>}
                            <input value="Submit" onClick={this.postMessage} type="button" className="btn btn-primary btn-block rounded-0 py-2" />
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}