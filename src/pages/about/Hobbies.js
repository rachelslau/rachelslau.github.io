import React, { Component } from 'react';
import Sidebar from '../Sidebar.js';
import { Link } from 'react-router-dom';
import '../../Overall.css';

class Hobbies extends Component {
    render() {
        return (
            <div>
                <Sidebar About="selected-page-link"/>
                <div className="main about-page">
                    <span className="contents">
                        <div className="about-sections">
                            <Link className="subpage-link" to="/about">who is she?</Link>
                            <Link className="subpage-link" to="/about-experience">experience</Link>
                            <Link className="subpage-link selected-subpage-link">hobbies</Link>
                        </div>

                    </span>
                </div>
            </div>
        );
    }
}

export default Hobbies;
