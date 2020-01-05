import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Overall.css';

class About extends Component {
    render() {
        return (
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
                    <Link className="page-link" to="/photos">photos</Link><br /><br />
                </div>
            </div>
        );
    }
  }

export default About;
