import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    handleClick =() => {
        this.props.buttonClick();
    }

    render() { 
        return (
            <button className="Button" onClick={this.handleClick}>{this.props.text}</button>
        );
    }
}
 
export default Button;