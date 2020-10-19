import React, { Component } from 'react';
import CartItem from './CartItem/CartItem';
import Button from '../Button/Button';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function imagesLoaded(parentNode) {
    const imgElements = parentNode.querySelectorAll("img");
    for (const img of imgElements) {
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

class Cart extends Component {

    state = {
        loading: false,
    }

    handleRemoveClick = (index) => {
        this.props.removeFromCart(index);
    }

    handleEditClick = (item, index) => {
        this.props.editCartItem(item, index);
    }

    handleStateChange = () => {
        this.setState({
            loading: !imagesLoaded(this.listElement),
        })
    }

    renderLoadingScreen = () => {
        if (!this.state.loading)  {
            return null;
        }
        return (
            <LoadingScreen />
        )
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
                    imageLoad={this.handleStateChange}
                />
            )
        })

        return (  
            <div className='Cart' ref={element => {this.listElement = element}}>
                <h2>Cart</h2>
                {this.renderLoadingScreen()}
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