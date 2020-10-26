import React, { Component } from 'react';

import Button from '../Button/Button';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import SizeSelector from '../SizeSelector/SizeSelector';
import CrustSelector from '../CrustSelector/CrustSelector';
import SauceSelector from '../SauceSelector/SauceSelector';
import CheeseSelector from '../CheeseSelector/CheeseSelector';
import SpecialInstructions from '../SpecialInstructions/SpecialInstructions'
import ToppingsList from '../ToppingsList/ToppingsList';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

class MenuItemDetail extends Component {

    state = {
        loading: true,
    }

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

    handleStateChange = () => {
        this.setState({ loading: false, })
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

        const { 
            currentItem, 
            quantityIncrease, 
            quantityDecrease, 
            sizeSelect, 
            crustSelect, 
            sauceTypeSelect, 
            sauceAmountSelect, 
            optionSelect, 
            includeCheeseSelect, 
            cheeseSplitSelect, 
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
                {this.renderLoadingScreen()}
                <div className={this.state.loading ? 'hide' : ''}>
                    <img src={currentItem.imageUrl} alt={currentItem.imageUrl} onLoad={this.handleStateChange} />
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

                        {currentItem.crust 
                            ? <div>
                                <CrustSelector crust={currentItem.crust} crustSelect={crustSelect} updatePrice={updatePrice} />
                                <div className="underline" ></div>
                            </div>
                            : ''
                        }

                        {currentItem.sauceType 
                            ? <div>
                                <SauceSelector 
                                    sauceAmount={currentItem.sauceAmount} 
                                    sauceType={currentItem.sauceType} 
                                    sauceTypeSelect={sauceTypeSelect} 
                                    sauceAmountSelect={sauceAmountSelect} 
                                    updatePrice={updatePrice} 
                                /> 
                                <div className="underline" ></div>
                            </div>
                            : ''
                        }

                        {currentItem.cheeseAmount 
                            ? <div>
                                <CheeseSelector 
                                    includeCheese={currentItem.includeCheese} 
                                    cheeseAmount={currentItem.cheeseAmount} 
                                    cheeseSplit={currentItem.cheeseSplit} 
                                    includeCheeseSelect={includeCheeseSelect} 
                                    cheeseSplitSelect={cheeseSplitSelect} 
                                    cheeseAmountSelect={cheeseAmountSelect} 
                                /> 
                                <div className="underline" ></div>
                            </div>
                            : ''
                        }

                        <SpecialInstructions currentItem={currentItem} recieveSpecialInstructions={recieveSpecialInstructions} />

                        {currentItem.toppings 
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
            </div>
        );
    }
}
 
export default MenuItemDetail;