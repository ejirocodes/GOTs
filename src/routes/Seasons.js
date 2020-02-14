import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import s1 from '../Assets/images/danny.png';
import './Seasons.css';

export class Seasons extends Component {
    render() {
        return (
            <>
                <Navbar />
                <section className="Seasons">
                    <figure className="item-1">
                        <NavLink to="/season-1">
                            <img src={s1} alt="Season one" />
                            <figcaption>Season 1</figcaption>
                        </NavLink>
                    </figure>
                    <figure className="item-1">
                        <NavLink to="/season-1">
                            <img src={s1} alt="Season one" />
                            <figcaption>Season 1</figcaption>
                        </NavLink>
                    </figure>
                    <figure className="item-1">
                        <NavLink to="/season-1">
                            <img src={s1} alt="Season one" />
                            <figcaption>Season 1</figcaption>
                        </NavLink>
                    </figure>
                    <figure className="item-1">
                        <NavLink to="/season-1">
                            <img src={s1} alt="Season one" />
                            <figcaption>Season 1</figcaption>
                        </NavLink>
                    </figure>
                    <figure className="item-1">
                        <NavLink to="/season-1">
                            <img src={s1} alt="Season one" />
                            <figcaption>Season 1</figcaption>
                        </NavLink>
                    </figure>
                </section>
            </>
        )
    }
}

export default Seasons;
