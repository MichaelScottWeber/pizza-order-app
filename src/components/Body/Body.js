import React, { Component } from 'react';

import Button from '../Button/Button';
import MenuCategoryList from '../MenuCategoryList/MenuCategoryList';
import MenuItemList from '../MenuCategoryList/MenuItemList/MenuItemList';
import MenuItemDetail from '../MenuCategoryList/MenuItemList/MenuItemDetail/MenuItemDetail';
import Cart from '../Cart/Cart';

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
        cart: [],
        editing: { isEditing: false, itemIndex: null }
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

    changeView = (view) => this.setState({ view: view })

    quantityIncrease = () => {
        const currentItem = this.state.currentItem;
        currentItem.quantity++;
        this.setState({ currentItem: currentItem });
        this.updatePrice();
    }

    quantityDecrease = () => {
        const currentItem = this.state.currentItem;
        if (currentItem.quantity > 1) {
            currentItem.quantity--;
            this.setState({ currentItem: currentItem });
        }
        this.updatePrice();
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
            amount: 'normal',
            price: e.price
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
        const currentItem = this.state.currentItem;
        let newPrice;

        if (this.state.category.category === 'Pizzas') {
            const sizeIndex = currentItem.availableSizes.findIndex(e => e.size === currentItem.currentSize);

            const crustIndex = ingredientsData.crust.findIndex(e => e.type === currentItem.ingredients.crust);
            const crustPrice = ingredientsData.crust[crustIndex].price;

            const sauceIndex = ingredientsData.sauce.findIndex(e => e.type === currentItem.ingredients.sauce.type);
            const saucePrice = ingredientsData.sauce[sauceIndex].price;

            let toppingsPrice = 0;
            currentItem.ingredients.toppings.forEach(topping => {
                if (topping.price) {
                    toppingsPrice += topping.price;
                }
            })

            newPrice = currentItem.availableSizes[sizeIndex].price + crustPrice + saucePrice + toppingsPrice;
        } else {
            const itemIndex = this.state.category.items.findIndex(e => e.name === currentItem.name);

            newPrice = this.state.category.items[itemIndex].currentPrice;
        }

        currentItem.currentPrice = newPrice * currentItem.quantity;

        this.setState({ currentItem: currentItem });
    }

    addToCart = () => {
        const cart = [...this.state.cart, this.state.currentItem];
        this.setState({ cart: cart })
    }

    removeFromCart = (index) => {
        let cart = [...this.state.cart];
        cart.splice(index, 1)
        this.setState({ cart: cart });
    }

    editCartItem = (item, index) => {
        this.props.menuData.forEach(cat => {
            cat.items.forEach(i => {
                if (i.name === item.name) {
                    this.setState({ category: {...cat} })
                }
            })
        })
        this.setState({
            editing: { isEditing: true, itemIndex: index },
            currentItem: {...item},
            view: 'MenuItemDetail',
        })
    }

    cancelEdit = () => {
        this.setState({
            editing: { isEditing: false, itemIndex: null },
            view: 'Cart'
        })
    }

    updateCartItem = (item, index) => {
        let cart = [...this.state.cart];
        cart.splice(index, 1, item);
        this.setState({ cart: cart });
    }

    // optionSelect = (option, selection) => {
    //     let currentItem = this.state.currentItem;
    //     currentItem[option] = selection;
    //     this.setState({ currentItem: currentItem })
    // }

    cartBtnContent = () => {
        return <span><i className="material-icons">shopping_cart</i>{this.state.cart.length}</span>
    }
    
    render() { 
        if (this.state.view === 'MenuCategoryList') {
            return (
                <div className="Body container">
                    {this.state.editing.isEditing === false ? 
                        <div className="Body-top-button-container">
                            <Button 
                                text={this.cartBtnContent()} 
                                buttonClick={() => this.changeView('Cart')} 
                                classNames="btn-large btn-floating"
                            />
                        </div>
                    : ''}
                    <MenuCategoryList 
                        menuData={this.props.menuData} 
                        categorySelect={this.categorySelect} 
                    />
                </div>
            );
        }
        if (this.state.view === 'MenuItemList') {
            return (
                <div className="Body container">
                    {this.state.editing.isEditing === false ?
                        <div className="Body-top-button-container">
                            <Button 
                                text={this.cartBtnContent()} 
                                buttonClick={() => this.changeView('Cart')} 
                                classNames="btn-large btn-floating"
                            />
                            <Button text="Back" buttonClick={() => this.changeView('MenuCategoryList')} />
                        </div>
                    : ''}
                    <MenuItemList 
                        category={this.state.category} 
                        itemSelect={this.itemSelect} 
                    />
                </div>
            )
        }
        if (this.state.view === 'MenuItemDetail') {
            return (
                <div className="Body container">
                    {this.state.editing.isEditing === false ?
                        <div className="Body-top-button-container">
                            <Button 
                                text={this.cartBtnContent()} 
                                buttonClick={() => this.changeView('Cart')} 
                                classNames="btn-large btn-floating"
                            />
                            <Button text="Back" buttonClick={() => this.changeView('MenuItemList')} />
                        </div>
                    : ''}
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
                        ingredientsData={ingredientsData}
                        addToCart={this.addToCart}
                        changeView={this.changeView}
                        editing={this.state.editing}
                        cancelEdit={this.cancelEdit}
                        updateCartItem={this.updateCartItem}
                    />
                </div>
            )
        }
        if (this.state.view === 'ItemAdded') {
            return (
                <div className='Body container'>
                    {/* <ItemAdded /> */}
                    Hurray, your item has been added to the cart!
                    <Button text="Continue Shopping" buttonClick={() => this.changeView('MenuCategoryList')} />
                    <Button 
                        text={this.cartBtnContent()} 
                        buttonClick={() => this.changeView('Cart')} 
                        classNames="btn-large btn-floating"
                    />
                </div>
            )
        }
        if (this.state.view === 'Cart') {
            return (
                <div className='Body container'>
                    <Button text="Continue Shopping" buttonClick={() => this.changeView('MenuCategoryList')} />
                    <Cart 
                        cart={this.state.cart} 
                        removeFromCart={this.removeFromCart} 
                        editCartItem={this.editCartItem}
                    />
                </div>
            )
        }
    }
}
 
export default Body;