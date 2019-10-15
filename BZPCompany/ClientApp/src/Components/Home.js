import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="text-center p-3">
            <h2 className="font-weight-bold">About what we do</h2>
            <iframe src="https://www.youtube.com/embed/YrIfADvpIxE" allowFullScreen></iframe>
            <p>to see our another products please visit following link.</p>
            <Link to="/products" className="btn btn-primary">See our products</Link>
        </div>
    )
}

export default Home;