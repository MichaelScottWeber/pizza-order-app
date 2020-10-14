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
                <div className="details-container">
                    <h3>{currentItem.name}</h3>
                    <p>{currentItem.description}</p>
                    <div className="underline" ></div>

                    <QuantitySelector 
                        quantity={currentItem.quantity}
                        quantityIncrease={quantityIncrease}
                        quantityDecrease={quantityDecrease}
                        updatePrice={updatePrice}
                    />
                    <div className="underline" ></div>

                    {currentItem.availableSizes 
                        ? <div>
                            <SizeSelector availableSizes={currentItem.availableSizes} size={currentItem.currentSize} sizeSelect={sizeSelect} optionSelect={optionSelect} updatePrice={updatePrice} />
                            <div className="underline" ></div>
                        </div>
                        : ''
                    }

                    {currentItem.ingredients 
                        ? <div>
                            <CrustSelector crust={currentItem.ingredients.crust} crustSelect={crustSelect} updatePrice={updatePrice} />
                            <div className="underline" ></div>
                        </div>
                        : ''
                    }

                    {currentItem.ingredients 
                        ? <div>
                            <SauceSelector sauce={currentItem.ingredients.sauce} sauceTypeSelect={sauceTypeSelect} sauceAmountSelect={sauceAmountSelect} updatePrice={updatePrice} /> 
                            <div className="underline" ></div>
                        </div>
                        : ''
                    }

                    {currentItem.ingredients 
                        ? <div>
                            <CheeseSelector cheese={currentItem.ingredients.cheese} cheeseInclude={cheeseInclude} cheeseSplit={cheeseSplit} cheeseAmountSelect={cheeseAmountSelect} /> 
                            <div className="underline" ></div>
                        </div>
                        : ''
                    }

                    <SpecialInstructions currentItem={currentItem} recieveSpecialInstructions={recieveSpecialInstructions} />

                    {currentItem.ingredients 
                        ? <div>
                            <div className="underline" ></div>
                            <ToppingsList currentItem={currentItem} ingredientsData={ingredientsData} toppingAdd={toppingAdd} toppingRemove={toppingRemove} toppingSplit={toppingSplit} toppingAmountSelect={toppingAmountSelect} updatePrice={updatePrice} />
                        </div> 
                        : ''}

                    <div className='MenuItemDetail-add-to-order'>
                        <Button
                            buttonClick={this.handleUpdateOrderClick}
                            text={editing.isEditing ? `Update item - $${currentItem.currentPrice}` : `Add to order - $${currentItem.currentPrice}`} 
                        />
                        {editing.isEditing ? <Button classNames='cancel-btn' buttonClick={this.handleCancelClick} text='X' /> : ''}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MenuItemDetail;