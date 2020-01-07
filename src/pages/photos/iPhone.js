import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar.js';
import '../../Overall.css';

class iPhone extends Component {
    render() {
        return (
            <div>
                <Sidebar />
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
