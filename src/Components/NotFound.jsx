import React from "react";
import naruto from '../Assets/naruto.jpg';
import '../Sass/components/NotFound.scss';

const NotFound = () => {

    return (
        <section className="notFound-page">
            <h1 className="notFound-page-title">
                Erreur 404 - Page inexistante
            </h1>
            <img src={naruto} alt="404 naruto" className="notFound-page-image"/>
        </section>
    );
};

export default NotFound;
