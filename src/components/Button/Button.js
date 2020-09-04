import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    handleClick =() => {
        this.props.buttonClick();
    }

    render() { 
        return (
            <button className={this.props.classNames} onClick={this.handleClick}>{this.props.text}</button>
        );
    }
}
 
export default Button;