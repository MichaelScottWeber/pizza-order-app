import React, { Component } from 'react';
import './AmountSelect.css';

class AmountSelect extends Component {

    handleChange = (e) => {
        this.props.amountSelect(e, this.props.index)
    };

    render() { 
        // const { currentAmount, } = this.props;

        let amountList = ['easy', 'normal', 'extra'].map((amount, index) => {
            return (
                <div key={amount}>
                    <input 
                    name={this.props.name}
                    id={amount}
                    type='checkbox'
                    onChange={() => {
                        this.handleChange(amount);
                    }}
                    checked={this.props.currentAmount === amount}
                    />
                    <label htmlFor={amount}>{amount}</label>
                </div>
            )
        })

        return (  
            <div className='AmountSelect'>{amountList}</div>
        );
    }
}
 
export default AmountSelect;