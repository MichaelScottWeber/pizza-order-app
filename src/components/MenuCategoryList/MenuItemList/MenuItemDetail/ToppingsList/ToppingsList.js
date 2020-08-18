import React, { Component } from 'react';
import AmountSelect from '../AmountSelect/AmountSelect';
import SplitSelect from '../SplitSelect/SplitSelect';
import ingredientsData from '../../../../../ingredientsData';
import './ToppingsList.css';

class ToppingsList extends Component {

    // handleIncludeOff = e => this.props.toppingAdd(e);
    
    render() { 
        const allToppings = ingredientsData.toppings.map((topping, index) => {
            const includedTopping = this.props.currentItem.ingredients.toppings.find(e => e.name === topping.type)

            if (includedTopping) {
                const index = this.props.currentItem.ingredients.toppings.indexOf(includedTopping)

                return (
                    <div key={includedTopping.name}>
                        <h4>{includedTopping.name}</h4>
                        <input
                            type='checkbox'
                            id={includedTopping.name}
                            checked={includedTopping}
                            onChange={() => this.props.toppingRemove(includedTopping)}
                        />
                        <SplitSelect 
                            index={index} 
                            splitSelect={this.props.toppingSplit} 
                            path={this.props.currentItem.ingredients.toppings[index]}
                        />
                        <AmountSelect 
                            name={includedTopping.name} 
                            currentAmount={includedTopping.amount} 
                            amountSelect={this.props.toppingAmountSelect} 
                            index={index}
                        />
                    </div>
                )
            } else {
                return (
                    <div key={topping.type}>
                        <h4>{topping.type}</h4>
                        <input
                            type='checkbox'
                            id={topping.type}
                            checked={includedTopping}
                            onChange={() => this.props.toppingAdd(topping)}
                        />
                    </div>
                )
            }
        })
        return (  
            <div className='ToppingsList'>
                <h3>Toppings</h3>
                {allToppings}
            </div>
        );
    }
}
 
export default ToppingsList;