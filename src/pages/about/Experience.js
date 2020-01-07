import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar.js';
import '../../Overall.css';

class Experience extends Component {
    render() {
        return (
            <div>
                <Sidebar About="selected-page-link"/>
                <div className="main about-page">
                    <span className="contents">
                        <div className="about-sections">
                            <Link className="subpage-link" to="/about">who is she?</Link>
                            <Link className="subpage-link selected-subpage-link">experience</Link>
                            <Link className="subpage-link" to="/about-hobbies">hobbies</Link>
                        </div>
                        <p className="coursework">
                            <b>C O U R S E W O R K</b><br /><br />
                            compsci 61a: structure and interpretation of computer programs<br />
                            compsci 61b: data structures<br />
                            compsci 70: discrete mathematics and probability theory<br />
                            info 190-1: introduction to data visualization<br />
                            data 8: foundations of data science<br />
                            data 100: principles and techniques of data science<br />
                            math 54: linear algebra and differential equations<br />
                        </p>
                        <br /><br />
                        <p className="coding-languages">
                            <b>C O D I N G &nbsp; L A N G U A G E S</b><br /><br />
                            frontend: react.js, angular, html/css, javascript, typescript<br />
                            backend: java, python, SQL, node.js, scheme<br />
                            data science: pandas, numpy, SQL, tableau, matplotlib, excel<br />

                        </p>
                    </span>
                </div>
            </div>
        );
    }
}

export default Experience;
