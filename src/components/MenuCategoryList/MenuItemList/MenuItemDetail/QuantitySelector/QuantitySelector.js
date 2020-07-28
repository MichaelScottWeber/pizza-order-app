import React, { Component } from 'react';
import './QuantitySelector.css';

class QuantitySelector extends Component {
    handlePlusClick = () => this.props.quantityIncrease();

    handleMinusClick = () => this.props.quantityDecrease();

    render() { 
        return (  
            <div className='QuantitySelector'>
                <h3>Quantity:</h3> 
                <button onClick={this.handlePlusClick}>+</button>
                {this.props.quantity}
                <button onClick={this.handleMinusClick}>-</button>
            </div>
        );
    }
}
 
export default QuantitySelector;