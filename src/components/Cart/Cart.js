import React, { Component } from 'react';
import CartItem from './CartItem/CartItem';

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
            // subTotal += item.currentPrice;
            // return (
            //     <div key={item.name}>
            //         <img src={item.imgUrl} />
            //         <h3>{item.name}</h3>
            //         <p>Qty {item.quantity}</p>
            //         <div onClick={}>
            //             Details
            //         </div>
            //         <p>${item.currentPrice}</p>
            //         <Button text="Edit" buttonClick={() => this.handleEditClick(item, index)} />
            //         <Button text="Remove" buttonClick={() => this.handleRemoveClick(index)} />
            //     </div>
            // )

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
                <p>Subtotal: ${subTotal}</p>
            </div>
        );
    }
}
 
export default Cart;