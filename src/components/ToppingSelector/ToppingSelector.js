import React, { Component } from 'react';
import AmountSelect from '../AmountSelect/AmountSelect';
import SplitSelect from '../SplitSelect/SplitSelect';

class ToppingSelector extends Component {

    render() {
        const { topping, } = this.props;

        if (topping.include) {
            return (
                <div className='ToppingSelector'>
                    <h4>{topping.name}</h4>
                    <SplitSelect topping={topping} splitSelect={console.log('!!!')} />
                    <div>
                        <input
                            type='checkbox'
                            id={topping.name}
                            checked={topping.include}
                        />
                    </div>
                    <AmountSelect name={topping.name} currentAmount={topping.amount} amountSelect={console.log('!!!')} />
                </div>
            );
        } else {
            return (
                <div className='ToppingSelector'>
                    <h5>{topping.name}</h5>
                    <div>
                        <input
                            type='checkbox'
                            id={topping.name}
                            checked={topping.include}
                        />
                    </div>
                </div>
            );
        }
    }
}

export default ToppingSelector;