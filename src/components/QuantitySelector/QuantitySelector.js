import React, { Component } from 'react';

class QuantitySelector extends Component {
    handlePlusClick = () => {
        this.props.quantityIncrease();
        // this.props.updatePrice();
    }

    handleMinusClick = () => {
        this.props.quantityDecrease();
        // this.props.updatePrice();
        // console.log('minused!')
    }

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