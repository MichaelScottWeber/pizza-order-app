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

    itemSelect = (item) => {
        this.setState({
            view: 'MenuItemDetail',
            currentItem: item
        })
    }

    categorySelect = (cat) => {
        this.setState({ 
            view: 'MenuItemList',
            category: cat
        });
    }

    backToCategoryList = (e) => {
        this.setState({ view: 'MenuCategoryList' });
    }

    backToMenuItemList = (e) => {
        this.setState({ view: 'MenuItemList' });
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
                    <MenuItemDetail currentItem={this.state.currentItem} />
                </div>
            )
        }
    }
}
 
export default Body;