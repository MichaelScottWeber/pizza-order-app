import React, { Component } from 'react';
import AmountSelect from '../../AmountSelect/AmountSelect';
import SplitSelect from '../../SplitSelect/SplitSelect';
import './ToppingSelector.css';

class ToppingSelector extends Component {
    
    render() { 

        const { topping, } = this.props;

        if (topping.include) {
            return (  
                <div className='ToppingSelector'>
                    <h4>{topping.name}</h4>
                    <div>
                        <input 
                            type='checkbox' 
                            id={topping.name} 
                            checked={topping.include}
                            // onChange={}
                        />
                    </div>
                    <SplitSelect topping={topping} splitSelect={console.log('!!!')} />
                    <AmountSelect name={topping.name} currentAmount={topping.amount} amountSelect={console.log('!!!')} />
                </div>
            );
        } else {
            return (  
                <div className='ToppingSelector'>
                    <h4>{topping.name}</h4>
                    <div>
                        <input 
                            type='checkbox' 
                            id={topping.name} 
                            checked={topping.include}
                            // onChange={}
                        />
                    </div>
                </div>
            );
        }
    }
}
 
export default ToppingSelector;