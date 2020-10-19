import React, { Component } from 'react';
import AmountSelect from '../AmountSelect/AmountSelect';
import SplitSelect from '../SplitSelect/SplitSelect';
import { ReactComponent as Checked } from '../../img/icons/icon-checked.svg';
import { ReactComponent as Unchecked } from '../../img/icons/icon-unchecked.svg';

class CheeseSelector extends Component {

    handleIncludeToggle = e => this.props.includeCheeseSelect(e);

    render() { 

        const { includeCheese, cheeseAmount, cheeseSplit } = this.props;

        if (includeCheese) {
            return (  
                <div className='CheeseSelector'>
                    <div className='top-container'>
                        <h4>Cheese</h4>
                        <SplitSelect 
                            path={cheeseSplit} 
                            splitSelect={this.props.cheeseSplitSelect} 
                        />
                    </div>
                    <div className='cheese-input'>
                        <input 
                            type='checkbox' 
                            id='cheese' 
                            checked={includeCheese}
                            onChange={this.handleIncludeToggle}
                        />
                        <label htmlFor='cheese'>
                            <Checked />
                            <span>Include Cheese?</span>
                        </label>
                    </div>
                    <AmountSelect 
                        name='cheese-amount' 
                        currentAmount={cheeseAmount} 
                        amountSelect={this.props.cheeseAmountSelect} 
                    />
                </div>
            );
        } else {
            return (  
                <div className='CheeseSelector'>
                    <div className='top-container'>
                        <h4>Cheese</h4>
                    </div>
                    <div className='cheese-input'>
                        <input 
                            type='checkbox' 
                            id='cheese' 
                            checked={includeCheese}
                            onChange={this.handleIncludeToggle}
                        />
                        <label htmlFor='cheese'>
                            <Unchecked />
                            <span>Include Cheese?</span>
                        </label>
                    </div>
                </div>
            );
        }

        
    }
}
 
export default CheeseSelector;