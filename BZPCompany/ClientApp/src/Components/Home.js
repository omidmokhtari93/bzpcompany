import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/scss/components.scss';

const Home = () => {
    return (
        <div className="home-border">
            <div className="text-left p-3">
                <h2 className="font-weight-bold text-left">Zinc Oxide Usage:</h2>
                <hr />
                <div className="w-75 m-auto">
                    <h4>* In destruction of micro-organisms</h4>
                    <p className="pb-1 border-bottom">
                        What is micro-organism: a microscopic organism, especially a bacterium, virus, or fungus
                        That sometimes need to be removed. Like pasteurizing milk in the food industry or cleaning the surfaces.
                        Its any process that eliminates or kills microbial life including transmissible agents (such as fungi, bacteria, viruses, etc.
                    </p>
                    <h4 className="mb-3">* Self-cleaning glass and surfaces and cars’ anti-fog mirrors</h4>
                    <div className="text-center">
                        <img className="m-auto w-100" src="http://cdn.simplesite.com/i/fd/28/287104481746430205/i287104489259211604._szw480h1280_.jpg" />
                        <p className="mt-3">And much more ...</p>
                        <Link to="/products" className="btn btn-primary">See all products</Link>
                    </div>
                </div>
                <hr />
                <h2 className="font-weight-bold text-left">Hard Coating:</h2>
                <hr />
                <div className="w-75 m-auto">
                    <p className="mb-3">
                        Hard coatings, formed by reactive PVD processes, are becoming widely used in the decorative coating and tool 
                        industries.Hard decorative PVD coatings are more resistant to...
                    </p>
                    <div className="text-center">
                        <img className="m-auto w-50" src="http://www.enduracoatings.com/evo_elements/png/endura-600-series.webp" />
                        <p className="mt-3">And much more ...</p>
                        <Link to="/services" className="btn btn-primary">See all services</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;