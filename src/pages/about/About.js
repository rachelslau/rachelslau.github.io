import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar.js';
import '../../Overall.css';

class About extends Component {
    render() {
        return (
            <div>
                <Sidebar About="selected-page-link"/>
                <div className="main about-page">
                    <span className="contents">
                        <div className="about-sections">
                            <Link className="subpage-link selected-subpage-link">who is she?</Link>
                            <Link className="subpage-link" to="/about-experience">experience</Link>
                            <Link className="subpage-link" to="/about-hobbies">hobbies</Link>
                        </div>
                        <div>
                            hi there! my name is rachel. welcome! <br />
                            born and raised in the silicon valley, i have followed the tech industry by pursuing computer science
                            (only after considering medicine, business, math, cognitive, and data science).
                            while the major i have chosen aligns with my left-brained dominance,
                            i am trying to build and maintian creative outlets as to not get stuck in too analytical of a mindset.
                        </div>
                    </span>
                </div>
            </div>
        );
    }
  }

export default About;
