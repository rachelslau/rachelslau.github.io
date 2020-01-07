import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar.js';
import '../../Overall.css';

class Film extends Component {
    render() {
        return (
            <div>
                <Sidebar Photos="selected-page-link"/>
                <div className="main photos-page">
                    <span className="contents">
                        <div className="photo-sections">
                            <Link className="subpage-link selected-subpage-link">film</Link>
                            <Link className="subpage-link" to="/photos-iphone">iphone</Link>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

export default Film;
