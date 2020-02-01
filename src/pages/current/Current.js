import React, { Component } from 'react';
import Sidebar from '../Sidebar.js';
import '../../Overall.css';

class Current extends Component {
    render() {
        return (
            <div>
                <Sidebar Current="selected-page-link"/>
                <div className="main">
                    <div className="disclaimer">
                        hi there! my website is still in the works, but feel free to look around a little bit!
                    </div>
                    <div className="current-page">
                        <span className="contents">
                            <b>currently</b>, i am a... <br /><br />
                            - student majoring in computer science at UC Berkeley <br /><br />
                            - client project manager for <a className="href-links" href="https://codebase.berkeley.edu/">Codebase</a> <br /><br />
                            - urban dancer in the <a className="href-links" href="https://www.facebook.com/BerkeleyDanceCommunity/">Berkeley Dance Community</a> <br /><br />
                            - <a className="href-links" href="http://www.aqualillies.com/">aqualilly</a>
                            <br /><br /><br /><br />
                            in the <b>future</b>, i will be a... <br /><br />
                            - summer 2020 software engineer at Facebook
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Current;
