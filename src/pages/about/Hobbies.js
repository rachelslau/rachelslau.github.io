import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Overall.css';

class Hobbies extends Component {
    render() {
        return (
            <div>
                <div className="sidebar">
                    <div className="my-name">
                        <p>R A C H E L</p>
                        <p>L A U</p>
                    </div>
                    <div className="spacer"></div>
                    <div className="menu">
                        <Link className="page-link" to="/">at the moment</Link><br /><br />
                        <Link className="page-link selected-page-link">about</Link><br /><br />
                        <Link className="page-link" to="/projects">projects</Link><br /><br />
                        <Link className="page-link" to="/photos-film">photos</Link><br /><br />
                    </div>
                </div>
                <div className="main about-page">
                    <span className="contents">
                        <div className="about-sections">
                            <Link className="subpage-link" to="/about">who is she?</Link>
                            <Link className="subpage-link">experience</Link>
                            <Link className="subpage-link selected-subpage-link" to="/about-hobbies">hobbies</Link>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

export default Hobbies;
