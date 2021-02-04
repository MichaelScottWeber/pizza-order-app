import React, { Component } from 'react';
import { ReactComponent as AddIcon } from '../../img/icons/icon-add.svg'
import { ReactComponent as RemoveIcon } from '../../img/icons/icon-remove.svg'

class QuantitySelector extends Component {
    handlePlusClick = () => {
        this.props.quantityIncrease();
    }

    handleMinusClick = () => {
        this.props.quantityDecrease();
    }

    render() {
        return (
            <div className='QuantitySelector'>
                <h4>Quantity:</h4>
                <div className="control-container">
                    <button className="icon-container">
                        <AddIcon className="add-icon" onClick={this.handlePlusClick} />
                    </button>
                    <span>
                        {this.props.quantity}
                    </span>
                    <button className="icon-container">
                        <RemoveIcon className="remove-icon" onClick={this.handleMinusClick} />
                    </button>
                </div>
            </div>
        );
    }
}

export default QuantitySelector;