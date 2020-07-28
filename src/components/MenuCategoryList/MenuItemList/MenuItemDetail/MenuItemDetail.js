import React, { Component } from 'react';
import QuantitySelector from './QuantitySelector/QuantitySelector';
import SizeSelector from './SizeSelector/SizeSelector';
import CrustSelector from './CrustSelector/CrustSelector';
import SauceSelector from './SauceSelector/SauceSelector';
import './MenuItemDetail.css';

class MenuItemDetail extends Component {

    // state = {
    //     currentItem: this.props.currentItem,
    // }

    // quantityIncrease = (e) => {
    //     let item = this.state.currentItem;
    //     item.quantity++;
    //     this.setState({ currentItem: item })
    // }

    // quantityDecrease = (e) => {
    //     let item = this.state.currentItem;
    //     if (item.quantity > 1) {
    //         item.quantity--;
    //         this.setState({ currentItem: item })
    //     }
    // }

    render() { 

        const { category, currentItem, quantityIncrease, quantityDecrease } = this.props;

        return (  
            <div className="MenuItemDetail">
                <img src={currentItem.imageUrl} alt={currentItem.imageUrl} />
                <h2>{currentItem.name}</h2>
                <p>{currentItem.description}</p>
                <QuantitySelector 
                    quantity={currentItem.quantity}
                    quantityIncrease={quantityIncrease}
                    quantityDecrease={quantityDecrease}
                />
                {currentItem.availableSizes ? <SizeSelector sizes={currentItem.availableSizes} /> : ''}
                {category.category ? <CrustSelector /> : ''}
                {category.category ? <SauceSelector /> : ''}
            </div>
        );
    }
}
 
export default MenuItemDetail;