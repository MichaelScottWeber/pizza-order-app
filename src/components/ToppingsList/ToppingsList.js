import React, { Component } from 'react';
import AmountSelect from '../AmountSelect/AmountSelect';
import SplitSelect from '../SplitSelect/SplitSelect';
import { ReactComponent as Checked } from '../../img/icons/icon-checked.svg';
import { ReactComponent as Unchecked } from '../../img/icons/icon-unchecked.svg';


class ToppingsList extends Component {

    render() {
        const allToppings = this.props.ingredientsData.toppings.map((topping, index) => {
            const includedTopping = this.props.currentItem.toppings.find(e => e.name === topping.type)

            if (includedTopping) {
                const index = this.props.currentItem.toppings.indexOf(includedTopping)

                return (
                    <div className="topping selected" key={includedTopping.name}>
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
                        <div className="label-split-container">
                            <label className="topping-label" htmlFor={includedTopping.name}>
                                <h5>{includedTopping.name}</h5>
                                <Checked />
                            </label>
                            <SplitSelect
                                index={index}
                                splitSelect={this.props.toppingSplit}
                                path={this.props.currentItem.toppings[index].split}
                            />
                        </div>
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
                    <div className="topping" key={topping.type}>
                        <input
                            type='checkbox'
                            id={topping.type}
                            checked={false}
                            onChange={() => {
                                this.props.toppingAdd(topping);
                                this.props.updatePrice();
                            }}
                        />
                        <label htmlFor={topping.type}>
                            <span className="topping-label">
                                <h5>{topping.type}</h5>
                                <Unchecked />
                            </span>
                        </label>
                        <div className='divider'></div>
                    </div>
                )
            }
        })

        return (
            <div className='ToppingsList'>
                <h4>Toppings</h4>
                {allToppings}
            </div>
        );
    }
}

export default ToppingsList;