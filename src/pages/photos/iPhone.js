import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Overall.css';

class iPhone extends Component {
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
                        <Link className="page-link" to="/about">about</Link><br /><br />
                        <Link className="page-link" to="/projects">projects</Link><br /><br />
                        <Link className="page-link selected-page-link">photos</Link><br /><br />
                    </div>
                </div>
                <div className="main photos-page">
                    <span className="contents">
                        <div className="photo-sections">
                            <Link className="subpage-link" to="/photos-film">film</Link>
                            <Link className="subpage-link selected-subpage-link">iphone</Link>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

export default iPhone;
