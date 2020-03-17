import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import s1 from '../Assets/images/danny.png';
import s2 from '../Assets/images/arya.png';
import s3 from '../Assets/images/jon.png';
import s4 from '../Assets/images/jamie.png';
import s5 from '../Assets/images/sansa.png';
import './Seasons.css';
import Footer from '../Components/Footer';

export class Seasons extends Component {
    render() {
        return (
            <>
                <Navbar navbarColor={false} />
                <section className="Seasons">
                    <figure className="item-1">
                        <NavLink to="/season1">
                            <img src={s1} alt="Season one" />
                            <figcaption>Season 1</figcaption>
                        </NavLink>
                    </figure>
                    <figure className="item-1">
                        <NavLink to="/season2">
                            <img src={s2} alt="Season one" />
                            <figcaption>Season 2</figcaption>
                        </NavLink>
                    </figure>
                    <figure className="item-1">
                        <NavLink to="/season3">
                            <img src={s3} alt="Season one" />
                            <figcaption>Season 3</figcaption>
                        </NavLink>
                    </figure>
                    <figure className="item-1">
                        <NavLink to="/season4">
                            <img src={s4} alt="Season one" />
                            <figcaption>Season 4</figcaption>
                        </NavLink>
                    </figure>
                    <figure className="item-1">
                        <NavLink to="/season5">
                            <img src={s5} alt="Season one" />
                            <figcaption>Season 5</figcaption>
                        </NavLink>
                    </figure>
                </section>
                <Footer />
            </>
        )
    }
}

export default Seasons;
