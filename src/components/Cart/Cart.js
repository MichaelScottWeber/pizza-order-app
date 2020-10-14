import React, { Component } from 'react';
import CartItem from './CartItem/CartItem';
import Button from '../Button/Button';

class Cart extends Component {
    handleRemoveClick = (index) => {
        this.props.removeFromCart(index);
    }

    handleEditClick = (item, index) => {
        this.props.editCartItem(item, index);
    }

    render() { 
        let subTotal = 0;

        const cartItems = this.props.cart.map((item, index) => {

            subTotal += item.currentPrice;
            return (
                <CartItem 
                    key={item.name}
                    item={item} 
                    index={index} 
                    removeFromCart={this.props.removeFromCart} 
                    editCartItem={this.props.editCartItem} 
                />
            )
        })

        return (  
            <div className='Cart'>
                <h2>Cart</h2>
                {cartItems}
                <div className='subtotal'>
                    <span>Subtotal</span> 
                    <span>${subTotal}</span>
                </div>
                <Button 
                    text="Confirm Order" 
                    buttonClick={() => alert("Thanks for playing Mike's Pizza App :)")} 
                    classNames={this.props.cart.length === 0 ? "confirm-order-btn disabled" : "confirm-order-btn"}
                    disabled={this.props.cart.length === 0 ? "disabled" : ""}
                />
            </div>
        );
    }
}
 
export default Cart;