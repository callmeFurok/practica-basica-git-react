import React from 'react';
import "../assets/styles/Home.css";
import developer from "./../assets/img/developer.svg";

const Home = () => {
    return (
        <section className="home">
            <a href="#target" className="cta"> Presiona para saludar</a>
            <section className="modal" id="target">
                <div className="modal__container">
                    <a href="#" className="modal__close">X</a>
                    <img src={developer} alt="Desarollador" className="modal__img"/>
                    <div className="modal__texts">
                        <h2 className="modal__title">Hola Mundo!! 😎</h2>
                        <p className="modal__paragraph"> Alfredo - Pasante TI en TCS</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;
