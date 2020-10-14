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
            if (item.ingredients && item.ingredients.crust) {
                return (
                    <li>
                        <span className='key'>Crust: </span>
                        <span className='value'>{item.ingredients.crust}</span>
                    </li>
                )
            }
        };

        const sauce = () => {
            if (item.ingredients && item.ingredients.sauce) {
                if (item.ingredients.sauce.type !== 'tomato' || item.ingredients.sauce.amount !== 'normal') {
                    return (
                        <li>
                            {/* {`Sauce: ${item.ingredients.sauce.amount !== 'normal' ? item.ingredients.sauce.amount : ''}
                            ${item.ingredients.sauce.type}`} */}
                            <span className='key'>Sauce: </span>
                            <span className='value'>
                                {item.ingredients.sauce.amount !== 'normal' ? item.ingredients.sauce.amount + ' ' : ''}
                                {item.ingredients.sauce.type}
                            </span>
                        </li>
                    )
                }
            }
        }

        const cheese = () => {
            if (item.ingredients && item.ingredients.cheese) {
                if (!item.ingredients.cheese.include) {
                    return (
                        <li>
                            <span className='key'>Cheese: </span>
                            <span className='value'>no cheese</span>
                        </li>
                    )
                }
                if (item.ingredients.cheese.amount !== 'normal' || item.ingredients.cheese.split !== 'whole') {
                    return (
                        <li>
                            {/* {`Cheese: ${item.ingredients.cheese.amount !== 'normal' ? item.ingredients.cheese.amount : ''}
                            ${item.ingredients.cheese.split !== 'whole' ? ' on ' + item.ingredients.cheese.split + ' side' : ''}`} */}
                            <span className='key'>Cheese: </span>
                            <span className='value'>
                                {item.ingredients.cheese.amount !== 'normal' ? item.ingredients.cheese.amount + ' ' : ''}
                                {item.ingredients.cheese.split !== 'whole' ? ' on ' + item.ingredients.cheese.split + ' side' : ''}
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
            if (item.ingredients && item.ingredients.toppings.length > 0) {
                return (
                    <li className='toppings'>
                        <span className='key'>{`Toppings: `}</span>
                        <ul className='value toppings-list'>
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
            <div className="CartItem">
                <div className="info-container">
                    <img src={this.props.item.imageUrl} />
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