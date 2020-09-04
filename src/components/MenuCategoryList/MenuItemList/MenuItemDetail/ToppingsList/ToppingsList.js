import React, { Component } from 'react';
import AmountSelect from '../AmountSelect/AmountSelect';
import SplitSelect from '../SplitSelect/SplitSelect';
// import ingredientsData from '../../../../../ingredientsData';
import './ToppingsList.css';
import 'materialize-css/dist/css/materialize.min.css';

class ToppingsList extends Component {

    // handleIncludeOff = e => this.props.toppingAdd(e);
    
    render() { 
        const allToppings = this.props.ingredientsData.toppings.map((topping, index) => {
            const includedTopping = this.props.currentItem.ingredients.toppings.find(e => e.name === topping.type)

            if (includedTopping) {
                const index = this.props.currentItem.ingredients.toppings.indexOf(includedTopping)

                return (
                    <div key={includedTopping.name}>
                        <h4>{includedTopping.name}</h4>
                        <label htmlFor={includedTopping.name}>
                            <input
                                className="filled-in"
                                type='checkbox'
                                id={includedTopping.name}
                                checked={true}
                                onChange={() => {
                                    this.props.toppingRemove(includedTopping)
                                    this.props.updatePrice();
                                }}
                            />
                            <span></span>
                        </label>
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
                        <div className='divider'></div>
                    </div>
                )
            } else {
                return (
                    <div key={topping.type}>
                        <h4>{topping.type}</h4>
                        <label htmlFor={topping.type}>
                            <input
                                type='checkbox'
                                id={topping.type}
                                checked={false}
                                onChange={() => {
                                    this.props.toppingAdd(topping);
                                    this.props.updatePrice();
                                }}
                            />
                            <span></span>
                        </label>
                        <div className='divider'></div>
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