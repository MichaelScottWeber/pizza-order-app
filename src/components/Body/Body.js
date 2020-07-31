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
        this.setState({ currentItem: currentItem })
    }

    quantityDecrease = (e) => {
        let currentItem = this.state.currentItem;
        if (currentItem.quantity > 1) {
            currentItem.quantity--;
            this.setState({ currentItem: currentItem })
        }
    }

    sizeSelect = (e) => {
        let currentItem = this.state.currentItem;
        currentItem.defaultSize = e;
        this.setState({ currentItem: currentItem })
    }
    
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
                    />
                </div>
            )
        }
    }
}
 
export default Body;