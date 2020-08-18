import React, { Component } from 'react';

import Button from '../Button/Button';
import MenuCategoryList from '../MenuCategoryList/MenuCategoryList';
import MenuItemList from '../MenuCategoryList/MenuItemList/MenuItemList';
import MenuItemDetail from '../MenuCategoryList/MenuItemList/MenuItemDetail/MenuItemDetail';

import menuData from '../../menuData';
import ingredientsData from '../../ingredientsData';

import './Body.css';

class Body extends Component {
    static defaultProps = { 
        menuData: [...menuData]
    }

    state = {  
        view: 'MenuCategoryList',
        category: null,
        currentItem: null,
        cart: []
    }

    categorySelect = (cat) => {
        this.setState({ 
            view: 'MenuItemList',
            category: {...cat}
        });
    }

    itemSelect = (item) => {
        if (this.state.category.category === 'Pizzas') {
            let index = item.availableSizes.findIndex(e => e.size === item.currentSize);
            item.currentPrice = item.availableSizes[index].price;
        }
        this.setState({
            view: 'MenuItemDetail',
            currentItem: {...item}
        })
    }

    backToCategoryList = () => this.setState({ view: 'MenuCategoryList' });

    backToMenuItemList = () => this.setState({ view: 'MenuItemList' });

    quantityIncrease = () => {
        const currentItem = this.state.currentItem;
        currentItem.quantity++;
        this.setState({ currentItem: currentItem });
    }

    quantityDecrease = () => {
        const currentItem = this.state.currentItem;
        if (currentItem.quantity > 1) {
            currentItem.quantity--;
            this.setState({ currentItem: currentItem });
        }
    }

    sizeSelect = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.currentSize = e;
        this.setState({ currentItem: currentItem });
    }

    crustSelect = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.ingredients.crust = e;
        this.setState({ currentItem: currentItem });
    }

    sauceTypeSelect = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.ingredients.sauce.type = e;
        this.setState({ currentItem: currentItem });
    }

    sauceAmountSelect = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.ingredients.sauce.amount = e;
        this.setState({ currentItem: currentItem });
    }

    cheeseInclude = () => {
        const currentItem = this.state.currentItem;
        currentItem.ingredients.cheese.include ? currentItem.ingredients.cheese.include = false : currentItem.ingredients.cheese.include = true;
        this.setState({ currentItem: currentItem });
    }

    cheeseAmountSelect = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.ingredients.cheese.amount = e;
        this.setState({ currentItem: currentItem });
    }

    cheeseSplit = (split) => {
        const currentItem = this.state.currentItem;
        currentItem.ingredients.cheese.split = split;
        this.setState({ currentItem: currentItem });
    }

    toppingAdd = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.ingredients.toppings.push({
            name: e.type,
            split: 'whole',
            amount: 'normal'
        });
        this.setState({ currentItem: currentItem });
    }

    toppingRemove = (e) => {
        const currentItem = this.state.currentItem;
        let index = currentItem.ingredients.toppings.indexOf(e)
        if (index > -1) {
            currentItem.ingredients.toppings.splice(index, 1);
        }
        this.setState({ currentItem: currentItem });
    }

    toppingSplit = (split, index) => {
        const currentItem = this.state.currentItem;
        currentItem.ingredients.toppings[index].split = split;
        this.setState({ currentItem: currentItem });
    }

    toppingAmountSelect = (amount, index) => {
        const currentItem = this.state.currentItem;
        currentItem.ingredients.toppings[index].amount = amount;
        this.setState({ currentItem: currentItem });
    }

    recieveSpecialInstructions = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.specialInstructions = e.target.value;
        this.setState({ currentItem: currentItem });
    }

    updatePrice = () => {
        // Need to pull base price instead of currentPrice
        const currentItem = this.state.currentItem;
        let newPrice;

        if (this.state.category.category === 'Pizzas') {
            let sizeIndex = currentItem.availableSizes.findIndex(e => e.size === currentItem.currentSize);

            let crustIndex = ingredientsData.crust.findIndex(e => e.type === currentItem.ingredients.crust);
            let crustPrice = ingredientsData.crust[crustIndex].price;

            let sauceIndex = ingredientsData.sauce.findIndex(e => e.type === currentItem.ingredients.sauce.type);
            let saucePrice = ingredientsData.sauce[sauceIndex].price;

            newPrice = currentItem.availableSizes[sizeIndex].price + crustPrice + saucePrice;            
        } else {
            newPrice = currentItem.currentPrice;
        }

        currentItem.currentPrice = newPrice * currentItem.quantity;

        this.setState({ currentItem: currentItem });
    }

    // optionSelect = (option, selection) => {
    //     let currentItem = this.state.currentItem;
    //     currentItem[option] = selection;
    //     this.setState({ currentItem: currentItem })
    // }
    
    render() { 
        if (this.state.view === 'MenuCategoryList') {
            return (
                <div className="Body">
                    <div className="Body-top-button-container">
                        <Button text="Cart" />
                    </div>
                    <MenuCategoryList 
                        menuData={this.props.menuData} 
                        categorySelect={this.categorySelect} 
                    />
                </div>
            );
        }
        if (this.state.view === 'MenuItemList') {
            return (
                <div className="Body">
                    <div className="Body-top-button-container">
                        <Button text="Cart" />
                        <Button text="Back" buttonClick={this.backToCategoryList} />
                    </div>
                    <MenuItemList 
                        category={this.state.category} 
                        itemSelect={this.itemSelect} 
                    />
                </div>
            )
        }
        if (this.state.view === 'MenuItemDetail') {
            return (
                <div className="Body">
                    <div className="Body-top-button-container">
                        <Button text="Cart" />
                        <Button text="Back" buttonClick={this.backToMenuItemList} />
                    </div>
                    <MenuItemDetail 
                        category={this.state.category}
                        currentItem={this.state.currentItem} 
                        quantityIncrease={this.quantityIncrease}
                        quantityDecrease={this.quantityDecrease}
                        sizeSelect={this.sizeSelect}
                        crustSelect={this.crustSelect}
                        sauceTypeSelect={this.sauceTypeSelect}
                        sauceAmountSelect={this.sauceAmountSelect}
                        cheeseInclude={this.cheeseInclude}
                        cheeseSplit={this.cheeseSplit}
                        cheeseAmountSelect={this.cheeseAmountSelect}
                        toppingAdd={this.toppingAdd}
                        toppingRemove={this.toppingRemove}
                        toppingSplit={this.toppingSplit}
                        toppingAmountSelect={this.toppingAmountSelect}
                        recieveSpecialInstructions={this.recieveSpecialInstructions}
                        updatePrice={this.updatePrice}
                    />
                </div>
            )
        }
    }
}
 
export default Body;