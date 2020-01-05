import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Overall.css';

class Current extends Component {
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
                        <Link className="page-link selected-page-link">at the moment</Link><br /><br />
                        <Link className="page-link" to="/about">about</Link><br /><br />
                        <Link className="page-link" to="/projects">projects</Link><br /><br />
                        <Link className="page-link" to="/photos">photos</Link><br /><br />
                    </div>
                </div>
                <div className="main current-page">
                    <span className="contents">
                        <b>currently</b>, i am a... <br /><br />
                        - student majoring in computer science at UC Berkeley <br /><br />
                        - client project manager for <a className="current-links" href="https://codebase.berkeley.edu/">Codebase</a> <br /><br />
                        - urban dancer in the <a className="current-links" href="https://www.facebook.com/BerkeleyDanceCommunity/">Berkeley Dance Community</a> <br /><br />
                        - <a className="current-links" href="http://www.aqualillies.com/">aqualilly</a>
                        <br /><br /><br /><br />
                        in the <b>future</b>, i will be a... <br /><br />
                        - summer 2020 software engineer at Facebook
                    </span>
                </div>
            </div>
        );
    }
}

export default Current;
