import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Overall.css';

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
            <div className="my-name">
                <p>R A C H E L</p>
                <p>L A U</p>
            </div>
            <div className="spacer"></div>
            <div className="menu">
                <Link className={ "page-link " + ( this.props.Current || "") } to="/">at the moment</Link><br /><br />
                <Link className={ "page-link " + ( this.props.About || "") } to='/about-experience'>about</Link><br /><br />
                <Link className={ "page-link " + ( this.props.Projects || "") } to="/projects">projects</Link><br /><br />
                <Link className={ "page-link " + ( this.props.Photos || "") } to="/photos-film">photos</Link><br /><br />
            </div>
        </div>
    );
  }
}

export default Sidebar;