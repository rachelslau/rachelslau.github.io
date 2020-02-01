import React, { Component } from 'react';
import Sidebar from '../Sidebar.js';
import Hobby from './Hobby.js';
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
                            {/* <Link className="subpage-link" to="/about">who is she?</Link> */}
                            <Link className="subpage-link" to="/about-experience">experience</Link>
                            <Link className="subpage-link selected-subpage-link">hobbies</Link>
                        </div>
                        <div>
                            <Hobby
                                title="A C A I"
                                // picture=
                                caption="acai"
                                description="previously only a boba addict, this semester I have decided to use acai bowls as the go to food of choice when I want to hang out with someone."
                                />
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

export default Hobbies;
