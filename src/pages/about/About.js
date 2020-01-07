import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar.js';
import '../../Overall.css';

class About extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="main about-page">
                    <span className="contents">
                        <div className="about-sections">
                            <Link className="subpage-link selected-subpage-link">who is she?</Link>
                            <Link className="subpage-link" to="/about-experience">experience</Link>
                            <Link className="subpage-link" to="/about-hobbies">hobbies</Link>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
  }

export default About;
