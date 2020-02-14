import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import s1 from '../Assets/images/danny.png'

export class Characters extends Component {
    render() {
        return (
            <>
           <Navbar />
                <section className="characters">
                    <figure className="item-1">
                        <img src={s1} alt="Season one"/>
                        <figcaption>Season 1</figcaption>
                    </figure>
                </section>
            </>
        )
    }
}

export default Characters;
