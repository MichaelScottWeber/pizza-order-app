import React, { Component } from 'react';
import QuantitySelector from './QuantitySelector/QuantitySelector';
import SizeSelector from './SizeSelector/SizeSelector';
import CrustSelector from './CrustSelector/CrustSelector';
import SauceSelector from './SauceSelector/SauceSelector';
import CheeseSelector from './CheeseSelector/CheeseSelector';
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

        const { category, currentItem, quantityIncrease, quantityDecrease, sizeSelect, crustSelect, sauceTypeSelect, sauceAmountSelect, optionSelect, cheeseInclude, cheeseSplit } = this.props;

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
                {currentItem.availableSizes ? <SizeSelector availableSizes={currentItem.availableSizes} size={currentItem.currentSize} sizeSelect={sizeSelect} optionSelect={optionSelect} /> : ''}
                {category.category === 'Pizzas' ? <CrustSelector crust={currentItem.ingredients.crust} crustSelect={crustSelect} /> : ''}
                {category.category === 'Pizzas' ? <SauceSelector sauce={currentItem.ingredients.sauce} sauceTypeSelect={sauceTypeSelect} sauceAmountSelect={sauceAmountSelect} /> : ''}
                {category.category === 'Pizzas' ? <CheeseSelector cheese={currentItem.ingredients.cheese} cheeseInclude={cheeseInclude} cheeseSplit={cheeseSplit} /> : ''}
            </div>
        );
    }
}
 
export default MenuItemDetail;