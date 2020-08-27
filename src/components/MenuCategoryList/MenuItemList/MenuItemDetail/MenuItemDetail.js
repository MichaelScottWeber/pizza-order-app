import React, { Component } from 'react';
import Button from '../../../Button/Button';
import QuantitySelector from './QuantitySelector/QuantitySelector';
import SizeSelector from './SizeSelector/SizeSelector';
import CrustSelector from './CrustSelector/CrustSelector';
import SauceSelector from './SauceSelector/SauceSelector';
import CheeseSelector from './CheeseSelector/CheeseSelector';
import SpecialInstructions from './SpecialInstructions/SpecialInstructions'
import ToppingsList from './ToppingsList/ToppingsList';
import './MenuItemDetail.css';

class MenuItemDetail extends Component {

    handleClick = () => {
        this.props.addToCart();
        this.props.changeView('ItemAdded');
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.currentItem.quantity !== prevProps.currentItem.quantity) {
    //         this.props.updatePrice();
    //     }
    // }

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
            updatePrice,
            ingredientsData,
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
                    updatePrice={updatePrice}
                />

                {currentItem.availableSizes ? <SizeSelector availableSizes={currentItem.availableSizes} size={currentItem.currentSize} sizeSelect={sizeSelect} optionSelect={optionSelect} updatePrice={updatePrice} /> : ''}

                {category.category === 'Pizzas' ? <CrustSelector crust={currentItem.ingredients.crust} crustSelect={crustSelect} updatePrice={updatePrice} /> : ''}

                {category.category === 'Pizzas' ? <SauceSelector sauce={currentItem.ingredients.sauce} sauceTypeSelect={sauceTypeSelect} sauceAmountSelect={sauceAmountSelect} updatePrice={updatePrice} /> : ''}

                {category.category === 'Pizzas' ? <CheeseSelector cheese={currentItem.ingredients.cheese} cheeseInclude={cheeseInclude} cheeseSplit={cheeseSplit} cheeseAmountSelect={cheeseAmountSelect} /> : ''}

                <SpecialInstructions currentItem={currentItem} recieveSpecialInstructions={recieveSpecialInstructions} />

                {category.category === 'Pizzas' ? <ToppingsList currentItem={currentItem} ingredientsData={ingredientsData} toppingAdd={toppingAdd} toppingRemove={toppingRemove} toppingSplit={toppingSplit} toppingAmountSelect={toppingAmountSelect} updatePrice={updatePrice} /> : ''}

                <div className='MenuItemDetail-add-to-order'>
                    <Button
                        buttonClick={this.handleClick}
                        text={`Add to order $${currentItem.currentPrice}`} 
                    />
                </div>
            </div>
        );
    }
}
 
export default MenuItemDetail;