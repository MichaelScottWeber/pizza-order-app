import React, { Component } from 'react';
import ingredientsData from '../../../../../ingredientsData';
import './SauceSelector.css';

class SauceSelector extends Component {

    handleSauceChange = (e) => this.props.sauceTypeSelect(e);

    handleAmountChange = (e) => this.props.sauceAmountSelect(e);

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

        let amountList = ['easy', 'normal', 'extra'].map((amount, index) => {
            return (
                <div key={amount}>
                    <input 
                    name='amount'
                    id={amount}
                    type='radio'
                    onChange={() => {
                        this.handleAmountChange(amount);
                    }}
                    checked={this.props.sauce.amount === amount}
                    />
                    <label htmlFor={amount}>{amount}</label>
                </div>
            )
        })

        return (  
            <div className='SauceSelector'>
                <h3>Sauce:</h3>
                <div className='SauceSelector-type'>{sauceList}</div>
                <div className='SauceSelector-amount'>{amountList}</div>
            </div>
        );
    }
}
 
export default SauceSelector;