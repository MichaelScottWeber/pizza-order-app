import React, { Component } from 'react';

import Button from '../Button/Button';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import SizeSelector from '../SizeSelector/SizeSelector';
import CrustSelector from '../CrustSelector/CrustSelector';
import SauceSelector from '../SauceSelector/SauceSelector';
import CheeseSelector from '../CheeseSelector/CheeseSelector';
import SpecialInstructions from '../SpecialInstructions/SpecialInstructions'
import ToppingsList from '../ToppingsList/ToppingsList';

class MenuItemDetail extends Component {

    handleUpdateOrderClick = () => {
        if (this.props.editing.isEditing) {
            this.props.updateCartItem(this.props.currentItem, this.props.editing.itemIndex);
            this.props.changeView('Cart');
        } else {
            this.props.addToCart();
            this.props.changeView('ItemAdded');
        }
    }

    handleCancelClick = () => {
        this.props.cancelEdit();
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
            editing,
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

                {currentItem.ingredients ? <CrustSelector crust={currentItem.ingredients.crust} crustSelect={crustSelect} updatePrice={updatePrice} /> : ''}

                {currentItem.ingredients ? <SauceSelector sauce={currentItem.ingredients.sauce} sauceTypeSelect={sauceTypeSelect} sauceAmountSelect={sauceAmountSelect} updatePrice={updatePrice} /> : ''}

                {currentItem.ingredients ? <CheeseSelector cheese={currentItem.ingredients.cheese} cheeseInclude={cheeseInclude} cheeseSplit={cheeseSplit} cheeseAmountSelect={cheeseAmountSelect} /> : ''}

                <SpecialInstructions currentItem={currentItem} recieveSpecialInstructions={recieveSpecialInstructions} />

                {currentItem.ingredients ? <ToppingsList currentItem={currentItem} ingredientsData={ingredientsData} toppingAdd={toppingAdd} toppingRemove={toppingRemove} toppingSplit={toppingSplit} toppingAmountSelect={toppingAmountSelect} updatePrice={updatePrice} /> : ''}

                <div className='MenuItemDetail-add-to-order'>
                    <Button
                        buttonClick={this.handleUpdateOrderClick}
                        text={editing.isEditing ? `Update item $${currentItem.currentPrice}` : `Add to order $${currentItem.currentPrice}`} 
                    />
                    {editing.isEditing ? <Button buttonClick={this.handleCancelClick} text='Cancel' /> : ''}
                </div>
            </div>
        );
    }
}
 
export default MenuItemDetail;