import React, { Component } from 'react';
import QuantitySelector from './QuantitySelector/QuantitySelector';
import SizeSelector from './SizeSelector/SizeSelector';
import CrustSelector from './CrustSelector/CrustSelector';
import SauceSelector from './SauceSelector/SauceSelector';
import CheeseSelector from './CheeseSelector/CheeseSelector';
import SpecialInstructions from './SpecialInstructions/SpecialInstructions'
import ToppingsList from './ToppingsList/ToppingsList';
import './MenuItemDetail.css';

class MenuItemDetail extends Component {

    render() { 

        const { 
            category, 
            currentItem, 
            quantityIncrease, 
            quantityDecrease, 
            sizeSelect, 
            crustSelect, 
            sauceTypeSelect, 
            sauceAmountSelect, 
            optionSelect, 
            cheeseInclude, 
            cheeseSplit, 
            cheeseAmountSelect, 
            toppingAdd, 
            toppingRemove, 
            toppingSplit,
            toppingAmountSelect,
            recieveSpecialInstructions,
        } = this.props;

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
                {category.category === 'Pizzas' ? <CheeseSelector cheese={currentItem.ingredients.cheese} cheeseInclude={cheeseInclude} cheeseSplit={cheeseSplit} cheeseAmountSelect={cheeseAmountSelect} /> : ''}
                <SpecialInstructions currentItem={currentItem} recieveSpecialInstructions={recieveSpecialInstructions} />
                {category.category === 'Pizzas' ? <ToppingsList currentItem={currentItem} toppingAdd={toppingAdd} toppingRemove={toppingRemove} toppingSplit={toppingSplit} toppingAmountSelect={toppingAmountSelect} /> : ''}
            </div>
        );
    }
}
 
export default MenuItemDetail;