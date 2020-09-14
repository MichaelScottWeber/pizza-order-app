import React, { Component } from 'react';
import AmountSelect from '../AmountSelect/AmountSelect';
import SplitSelect from '../SplitSelect/SplitSelect';

class CheeseSelector extends Component {

    handleIncludeToggle = e => this.props.cheeseInclude(e);

    render() { 

        const { cheese } = this.props;

        if (cheese.include) {
            return (  
                <div className='CheeseSelector'>
                    <h3>Cheese</h3>
                    <div>
                        <input 
                            type='checkbox' 
                            id='cheese' 
                            checked={cheese.include}
                            onChange={this.handleIncludeToggle}
                        />
                        <label htmlFor='cheese'>Include Cheese?</label>
                    </div>
                    <SplitSelect 
                        path={cheese} 
                        splitSelect={this.props.cheeseSplit} 
                    />
                    <AmountSelect name='cheese-amount' currentAmount={cheese.amount} amountSelect={this.props.cheeseAmountSelect} />
                </div>
            );
        } else {
            return (  
                <div className='CheeseSelector'>
                    <h3>Cheese</h3>
                    <div>
                        <input 
                            type='checkbox' 
                            id='cheese' 
                            checked={cheese.include}
                            onChange={this.handleIncludeToggle}
                        />
                        <label htmlFor='cheese'>Include Cheese?</label>
                    </div>
                </div>
            );
        }

        
    }
}
 
export default CheeseSelector;