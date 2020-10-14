import React, { Component } from 'react';
import Button from '../Button/Button'
import { ReactComponent as ConfirmCheck } from '../../img/icons/icon-confirm-check.svg';

class ItemAdded extends Component {

    handleContinueShoppingClick = () => this.props.changeView('MenuCategoryList')

    handleCartClick = () => this.props.changeView('Cart')

    render() { 

        return (  
            <div className="ItemAdded">
                <ConfirmCheck className="icon" />
                <h2>Your item has been added!</h2>
                <p>{`Qty. ${this.props.currentItem.quantity} - ${this.props.currentItem.currentSize ? this.props.currentItem.currentSize : ''} ${this.props.currentItem.name}`}</p>
                <div className="btn-container">
                    <Button 
                        text="Keep Shopping" 
                        buttonClick={this.handleContinueShoppingClick} 
                        classNames="keep-shopping-btn"
                    />
                    <Button 
                        text="View Cart" 
                        buttonClick={this.handleCartClick} 
                        classNames="cart-btn"
                    />
                </div>
            </div>
        );
    }
}
 
export default ItemAdded;