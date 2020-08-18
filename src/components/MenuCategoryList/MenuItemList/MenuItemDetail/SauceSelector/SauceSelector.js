import React, { Component } from 'react';
import AmountSelect from '../AmountSelect/AmountSelect';
import ingredientsData from '../../../../../ingredientsData';
import './SauceSelector.css';

class SauceSelector extends Component {

    handleSauceChange = (e) => {
        this.props.sauceTypeSelect(e);
        this.props.updatePrice();
    }

    render() { 
        let sauceList = ingredientsData.sauce.map((sauce, index) => {
            return (
                <div key={sauce.type}>
                    <input
                        name='sauce'
                        id={sauce.type}
                        type='radio'
                        onChange={() => {
                            this.handleSauceChange(sauce.type)
                        }}
                        checked={this.props.sauce.type === sauce.type}
                    />
                    <label htmlFor={sauce.type}>{sauce.type}</label>
                </div>
            )
        })

        return (  
            <div className='SauceSelector'>
                <h3>Sauce:</h3>
                <div className='SauceSelector-type'>{sauceList}</div>
                <AmountSelect name='sauce-amount' currentAmount={this.props.sauce.amount} amountSelect={this.props.sauceAmountSelect} />
            </div>
        );
    }
}
 
export default SauceSelector;