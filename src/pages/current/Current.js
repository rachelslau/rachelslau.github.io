import React, { Component } from 'react';
import Sidebar from '../Sidebar.js';
import '../../Overall.css';

class Current extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="main current-page">
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
        );
    }
}

export default Current;
