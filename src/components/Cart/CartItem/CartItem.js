import React, { Component } from 'react';
import Button from '../../Button/Button';

class CartItem extends Component {
    state = { displayDetails: false }
    
    handleRemoveClick = (index) => {
        this.props.removeFromCart(index);
    }

    handleEditClick = (item, index) => {
        this.props.editCartItem(item, index);
    }

    handleDetailsClick = () => {
        this.setState(prevState => ({ displayDetails: !prevState.displayDetails }));
    } 
    render() { 
        const { item } = this.props;

        const size = () => item.currentSize ? <li>{`Size: ${item.currentSize}`}</li> : '';
        const crust = () => item.ingredients && item.ingredients.crust ? <li>{`Crust: ${item.ingredients.crust}`}</li> : '';
        const sauce = () => {
            if (item.ingredients && item.ingredients.sauce) {
                if (item.ingredients.sauce.type !== 'tomato' || item.ingredients.sauce.amount !== 'normal') {
                    return (
                        <li>
                            {`Sauce: ${item.ingredients.sauce.amount !== 'normal' ? item.ingredients.sauce.amount : ''}
                            ${item.ingredients.sauce.type}`}
                        </li>
                    )
                }
            }
        }
        const cheese = () => {
            if (item.ingredients && item.ingredients.cheese) {
                if (!item.ingredients.cheese.include) {
                    return <li>Cheese: no cheese</li>
                }
                if (item.ingredients.cheese.amount !== 'normal' || item.ingredients.cheese.split !== 'whole') {
                    return (
                        <li>
                            {`Cheese: ${item.ingredients.cheese.amount !== 'normal' ? item.ingredients.cheese.amount : ''}
                            ${item.ingredients.cheese.split !== 'whole' ? ' on ' + item.ingredients.cheese.split + ' side' : ''}`}
                        </li>
                    )
                }
            }
        }
        const specialInstructions = () => item.specialInstructions ? <li>{`Instructions: ${item.specialInstructions}`}</li> : '';
        const toppings = () => {
            if (item.ingredients && item.ingredients.toppings.length > 0) {
                return (
                    <li>Toppings: 
                        <ul>
                            {item.ingredients.toppings.map((topping, index) => {
                                return (
                                    <li>
                                        {`${topping.amount !== 'normal' ? topping.amount : ''} ${topping.name}
                                        ${topping.split !== 'whole' ? ' on ' + topping.split : ''}`}
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                )
            }
        }

        return (  
            <div>
                <img src={this.props.item.imgUrl} />
                <h3>{this.props.item.name}</h3>
                <p>Qty {this.props.item.quantity}</p>
                <div onClick={this.handleDetailsClick}>
                    Details
                </div>
                <ul style={{ 'display': this.state.displayDetails ? 'block' : 'none' }} className={`${this.state.displayDetails ? '' : 'hide'}`}>
                    {size()}
                    {crust()}
                    {sauce()}
                    {cheese()}
                    {specialInstructions()}
                    {toppings()}
                </ul>
                <p>${this.props.item.currentPrice}</p>
                <Button text="Edit" buttonClick={() => this.handleEditClick(this.props.item, this.props.index)} />
                <Button text="Remove" buttonClick={() => this.handleRemoveClick(this.props.index)} />
            </div>
        );
    }
}
 
export default CartItem;