import React, { Component } from 'react';
import Button from '../../Button/Button';

import {ReactComponent as RemoveIcon} from '../../../img/icons/icon-remove.svg'
import {ReactComponent as DetailsIcon} from '../../../img/icons/icon-cheveron-right.svg'

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

        // const size = () => item.currentSize ? <li>{`Size: ${item.currentSize}`}</li> : '';
        const size = () => {
            if (item.currentSize) {
                return (
                    <li>
                        <span className='key'>Size: </span>
                        <span className='value'>{item.currentSize}</span>
                    </li>
                )
            }
        };

        // const crust = () => item.ingredients && item.ingredients.crust ? <li>{`Crust: ${item.ingredients.crust}`}</li> : '';
        const crust = () => {
            if (item.crust) {
                return (
                    <li>
                        <span className='key'>Crust: </span>
                        <span className='value'>{item.crust}</span>
                    </li>
                )
            }
        };

        const sauce = () => {
            if (item.sauceAmount) {
                if (item.sauceType !== 'tomato' || item.sauceAmount !== 'normal') {
                    return (
                        <li>
                            <span className='key'>Sauce: </span>
                            <span className='value'>
                                {item.sauceAmount !== 'normal' ? item.sauceAmount + ' ' : ''}
                                {item.sauceType}
                            </span>
                        </li>
                    )
                }
            }
        }

        const cheese = () => {
            if (item.cheeseAmount) {
                if (!item.includeCheese) {
                    return (
                        <li>
                            <span className='key'>Cheese: </span>
                            <span className='value'>no cheese</span>
                        </li>
                    )
                }
                if (item.cheeseAmount !== 'normal' || item.cheeseSplit !== 'whole') {
                    return (
                        <li>
                            <span className='key'>Cheese: </span>
                            <span className='value'>
                                {item.cheeseAmount !== 'normal' ? item.cheeseAmount + ' ' : ''}
                                {item.cheeseSplit !== 'whole' ? ' on ' + item.cheeseSplit + ' side' : ''}
                            </span>
                        </li>
                    )
                }
            }
        }

        // const specialInstructions = () => item.specialInstructions ? <li>{`Instructions: ${item.specialInstructions}`}</li> : '';
        const specialInstructions = () => {
            if (item.specialInstructions) {
                return (
                    <li>
                        <span className='key'>Instructions: </span>
                        <span className='value'>{item.specialInstructions}</span>
                    </li>
                )
            }
        };

        const toppings = () => {
            if (item.toppings && item.toppings.length > 0) {
                return (
                    <li className='toppings'>
                        <span className='key'>{`Toppings: `}</span>
                        <ul className='value toppings-list'>
                            {item.toppings.map((topping, index) => {
                                return (
                                    <li key={topping.name}>
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
            <div className="CartItem">
                <div className="info-container">
                    <img src={this.props.item.imageUrl} onLoad={this.props.imageLoad} />
                    <div>
                        <h3>{this.props.item.name}</h3>
                        <p>Qty {this.props.item.quantity}</p>
                        <div>
                            <span className="details-container" onClick={this.handleDetailsClick}>
                                <DetailsIcon className={this.state.displayDetails ? "details-icon rotate-icon" : "details-icon"} />
                                <span>Details</span>
                            </span>
                        </div>
                        <ul className={this.state.displayDetails ? 'details-list show-details' : 'details-list'}>
                            {size()}
                            {crust()}
                            {sauce()}
                            {cheese()}
                            {specialInstructions()}
                            {toppings()}
                        </ul>
                    </div>
                    <Button 
                        text="Edit" 
                        buttonClick={() => this.handleEditClick(this.props.item, this.props.index)} 
                        classNames='edit-btn'
                    />
                </div>
                <div className="remove-container">
                    <Button 
                        text={
                            <div><RemoveIcon className="remove-icon" /> <span>Remove</span></div>
                        } 
                        buttonClick={() => this.handleRemoveClick(this.props.index)} 
                        classNames='remove-btn'
                    />
                    <p>${this.props.item.currentPrice}</p>
                </div>
                <div className="underline" ></div>
            </div>
        );
    }
}
 
export default CartItem;