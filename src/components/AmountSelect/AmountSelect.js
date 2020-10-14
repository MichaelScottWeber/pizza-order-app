import React, { Component } from 'react';

class AmountSelect extends Component {

    handleClick = (e) => {
        this.props.amountSelect(e, this.props.index)
    };

    render() { 
        // const { currentAmount, } = this.props;

        let amountList = ['light', 'normal', 'extra'].map((amount, index) => {
            return (
                <div key={amount}>
                    <input 
                        name={this.props.name}
                        id={amount}
                        type='checkbox'
                        readOnly
                        checked={this.props.currentAmount === amount}
                    />
                    <label 
                        className={this.props.currentAmount === amount ? 'selected' : ''} 
                        onClick={() => {
                            this.handleClick(amount);
                        }}
                        htmlFor={amount}
                    >
                        {amount}
                    </label>
                </div>
            )
        })

        return (  
            <div className='AmountSelect'>{amountList}</div>
        );
    }
}
 
export default AmountSelect;