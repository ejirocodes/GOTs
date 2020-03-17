import React, { Component } from 'react';
import Header from '../Components/Header';
import LearnMore from '../Components/LearnMore';
import Footer from '../Components/Footer';

class Homepage extends Component {
    render() {
        return (
            <>
                <Header /> 
                <LearnMore /> 
                <Footer />
            </>
        )
    }
}


export default Homepage;
