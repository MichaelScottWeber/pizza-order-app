import React, { Component } from 'react';

import Button from '../Button/Button';
import MenuCategoryList from '../MenuCategoryList/MenuCategoryList';
import MenuItemList from '../MenuCategoryList/MenuItemList/MenuItemList';
import MenuItemDetail from '../MenuCategoryList/MenuItemList/MenuItemDetail/MenuItemDetail';

import menuData from '../../menuData';
import './Body.css';

class Body extends Component {
    state = {  
        view: 'MenuCategoryList',
        category: null,
        currentItem: null,
        cart: []
    }

    categorySelect = (cat) => {
        this.setState({ 
            view: 'MenuItemList',
            category: cat
        });
    }

    itemSelect = (item) => {
        this.setState({
            view: 'MenuItemDetail',
            currentItem: item
        })
    }

    backToCategoryList = (e) => this.setState({ view: 'MenuCategoryList' });

    backToMenuItemList = (e) => this.setState({ view: 'MenuItemList' });

    quantityIncrease = (e) => {
        let currentItem = this.state.currentItem;
        currentItem.quantity++;
        this.setState({ currentItem: currentItem });
    }

    quantityDecrease = (e) => {
        let currentItem = this.state.currentItem;
        if (currentItem.quantity > 1) {
            currentItem.quantity--;
            this.setState({ currentItem: currentItem });
        }
    }

    sizeSelect = (e) => {
        let currentItem = this.state.currentItem;
        currentItem.currentSize = e;
        this.setState({ currentItem: currentItem });
    }

    crustSelect = (e) => {
        let currentItem = this.state.currentItem;
        currentItem.ingredients.crust = e;
        this.setState({ currentItem: currentItem });
    }

    sauceTypeSelect = (e) => {
        let currentItem = this.state.currentItem;
        currentItem.ingredients.sauce.type = e;
        this.setState({ currentItem: currentItem });
    }

    sauceAmountSelect = (e) => {
        let currentItem = this.state.currentItem;
        currentItem.ingredients.sauce.amount = e;
        this.setState({ currentItem: currentItem });
    }

    cheeseInclude = (e) => {
        let currentItem = this.state.currentItem;
        currentItem.ingredients.cheese.include ? currentItem.ingredients.cheese.include = false : currentItem.ingredients.cheese.include = true;
        this.setState({ currentItem: currentItem });
    }

    cheeseAmountSelect = (e) => {
        let currentItem = this.state.currentItem;
        currentItem.ingredients.cheese.amount = e;
        this.setState({ currentItem: currentItem });
    }

    cheeseSplit = (split) => {
        let currentItem = this.state.currentItem;
        currentItem.ingredients.cheese.split = split;
        this.setState({ currentItem: currentItem });
    }

    toppingAdd = (e) => {
        let currentItem = this.state.currentItem;
        currentItem.ingredients.toppings.push({
            name: e.type,
            split: 'whole',
            amount: 'normal'
        });
        this.setState({ currentItem: currentItem });
    }

    toppingRemove = (e) => {
        let currentItem = this.state.currentItem;
        let index = currentItem.ingredients.toppings.indexOf(e)
        if (index > -1) {
            currentItem.ingredients.toppings.splice(index, 1);
        }
        this.setState({ currentItem: currentItem });
    }

    toppingSplit = (split, index) => {
        let currentItem = this.state.currentItem;
        currentItem.ingredients.toppings[index].split = split;
        this.setState({ currentItem: currentItem });
    }

    toppingAmountSelect = (amount, index) => {
        let currentItem = this.state.currentItem;
        currentItem.ingredients.toppings[index].amount = amount;
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
                    <MenuCategoryList menuData={menuData} categorySelect={this.categorySelect} />
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
                    <MenuItemList category={this.state.category} itemSelect={this.itemSelect} />
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
                    />
                </div>
            )
        }
    }
}
 
export default Body;