import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import backIcon from '../Assets/elements/back_icon.png';
import './Characters.css';
import Footer from '../Components/Footer';

class Characters extends Component {
  render() {
    const cahractersImages = [
      {
        title: 'Aemon',
        url: require('../Assets/images/GOT505_102414_HS_DSC_1022-696x442.jpg')
      },
      {
        title: 'Arya',
        url: require('../Assets/images/arya_stark_s7.jpg')
      },
      {
        title: 'Aerys',
        url: require('../Assets/images/mad-king-aerys-targaryen.jpg')
      }
    ];

    return (
      <>
        <section className="Characters">
          <div className="Characters__bg--left">
            <div className="back-btn">
              <NavLink to="/">
                <p>BACK</p> <img src={backIcon} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="Characters-content">
            <h3 className="Characters-heading">Characters</h3>
            <div className="Characters-img">
              {cahractersImages.map(cahractersImage => (
                <div className="img-wrapper" key={cahractersImage.title}>
                  <NavLink to={`characters/${cahractersImage.title}`}>
                    <img
                      src={cahractersImage.url}
                      key={cahractersImage.title}
                      alt={cahractersImage.title}
                    />
                  </NavLink>
                  <h4>{cahractersImage.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Characters;
