import React, { Component } from 'react';
import Sidebar from '../Sidebar.js';
import '../../Overall.css';

class Projects extends Component {
    render() {
        return (
            <div>
                <Sidebar Projects="selected-page-link" />
            </div>
        );
    }
}

export default Projects;
