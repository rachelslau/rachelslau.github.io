import React, { Component } from 'react';
import '../../Overall.css';

class Hobby extends Component {
  render() {
    return (
        <div className="ihobby">
            <p className="ihobby-title"><b>{this.props.title}</b></p>
            <img src={this.props.picture} alt={this.props.caption} width="250px" height="250px"/>
            <div className="ihobby-overlay">
                <p className="ihobby-text">{this.props.description}</p>
            </div>
        </div>
    );
  }
}

export default Hobby;
