import React, { Component } from 'react';

import Button from '../Button/Button';
import MenuCategoryList from '../MenuCategoryList/MenuCategoryList';
import MenuItemList from '../MenuItemList/MenuItemList';
import MenuItemDetail from '../MenuItemDetail/MenuItemDetail';
import ItemAdded from '../ItemAdded/ItemAdded';
import Cart from '../Cart/Cart';

import menuData from '../../menuData';
import ingredientsData from '../../ingredientsData';

import {ReactComponent as CartIcon} from '../../img/icons/icon-shopping-cart.svg'
import {ReactComponent as BackIcon} from '../../img/icons/icon-cheveron-left.svg'

class Body extends Component {
    // static defaultProps = { 
    //     menuData: menuData,
    // }

    state = {  
        menuData: [...menuData],
        // windowWidth: window.innerWidth,
        view: 'MenuCategoryList',
        largeScreen: null,
        category: null,
        currentItem: null,
        cart: [],
        editing: { isEditing: false, itemIndex: null }
    }

    handleResize = () => {
        if (window.innerWidth >= this.largeWindowSize) {
            this.setState({ largeScreen: true });
        } else {
            this.setState({ largeScreen: false });
        }
    }

    categorySelect = (cat) => {
        const category = Object.assign({}, cat);
        this.setState({ 
            view: 'MenuItemList',
            category: category,
        });
    }

    itemSelect = (item) => {
        const currentItem = Object.assign({}, item);
        if (this.state.category.category === 'Pizzas' || this.state.category.category === 'Salads') {
            let index = currentItem.availableSizes.findIndex(e => e.size === currentItem.currentSize);
            currentItem.currentPrice = currentItem.availableSizes[index].price;
        }
        this.setState({
            view: 'MenuItemDetail',
            // currentItem: {...item}
            currentItem: currentItem,
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
        currentItem.crust = e;
        this.setState({ currentItem: currentItem });
    }

    sauceTypeSelect = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.sauceType = e;
        this.setState({ currentItem: {...currentItem} });
    }

    sauceAmountSelect = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.sauceAmount = e;
        this.setState({ currentItem: currentItem });
    }

    includeCheeseSelect = () => {
        const currentItem = this.state.currentItem;
        currentItem.includeCheese ? currentItem.includeCheese = false : currentItem.includeCheese = true;
        this.setState({ currentItem: currentItem });
    }

    cheeseAmountSelect = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.cheeseAmount = e;
        this.setState({ currentItem: currentItem });
    }

    cheeseSplitSelect = (split) => {
        const currentItem = this.state.currentItem;
        currentItem.cheeseSplit = split;
        this.setState({ currentItem: currentItem });
    }

    toppingAdd = (e) => {
        const currentItem = this.state.currentItem;
        currentItem.toppings.push({
            name: e.type,
            split: 'whole',
            amount: 'normal',
            price: e.price
        });
        this.setState({ currentItem: currentItem });

        // const currentItemToppings = this.state.currentItem.toppings;
        // const newToppings = [...currentItemToppings].push({
        //     name: e.type,
        //     split: 'whole',
        //     amount: 'normal',
        //     price: e.price
        // });
        // this.setState(prevState => ({
        //     ...prevState,
        //     currentItem: {
        //         ...prevState.currentItem,
        //         toppings: newToppings
        //     }
        // }))
    }

    toppingRemove = (e) => {
        const currentItem = this.state.currentItem;
        let index = currentItem.toppings.indexOf(e)
        if (index > -1) {
            currentItem.toppings.splice(index, 1);
        }
        this.setState({ currentItem: currentItem });
    }

    toppingSplit = (split, index) => {
        const currentItem = this.state.currentItem;
        currentItem.toppings[index].split = split;
        this.setState({ currentItem: currentItem });
    }

    toppingAmountSelect = (amount, index) => {
        const currentItem = this.state.currentItem;
        currentItem.toppings[index].amount = amount;
        this.setState({ currentItem: currentItem });
    }

    recieveSpecialInstructions = (e) => {
        const currentItem = this.state.currentItem;
        // currentItem.specialInstructions = e.target.value.toUpperCase();
        currentItem.specialInstructions = e.target.value;
        this.setState({ currentItem: currentItem });
    }

    updatePrice = () => {
        const currentItem = this.state.currentItem;
        let newPrice;

        if (this.state.category.category === 'Pizzas') {
            const sizeIndex = currentItem.availableSizes.findIndex(e => e.size === currentItem.currentSize);

            const crustIndex = ingredientsData.crust.findIndex(e => e.type === currentItem.crust);
            const crustPrice = ingredientsData.crust[crustIndex].price;

            const sauceIndex = ingredientsData.sauce.findIndex(e => e.type === currentItem.sauceType);
            const saucePrice = ingredientsData.sauce[sauceIndex].price;

            let toppingsPrice = 0;
            currentItem.toppings.forEach(topping => {
                if (topping.price) {
                    toppingsPrice += topping.price;
                }
            })

            newPrice = currentItem.availableSizes[sizeIndex].price + crustPrice + saucePrice + toppingsPrice;
        } else if (this.state.category.category === 'Salads') {
            const sizeIndex = currentItem.availableSizes.findIndex(e => e.size === currentItem.currentSize);
            newPrice = currentItem.availableSizes[sizeIndex].price
        } else {
            const itemIndex = this.state.category.items.findIndex(e => e.name === currentItem.name);

            newPrice = this.state.category.items[itemIndex].currentPrice;
        }

        currentItem.currentPrice = parseFloat((newPrice * currentItem.quantity).toFixed(2));

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
        menuData.forEach(cat => {
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
        this.setState({ 
            cart: cart,
            editing: { isEditing: false, itemIndex: null },
        });
    }

    continueShopping = () => {
        this.changeView('MenuCategoryList');
        this.setState({
            category: null,
            currentItem: null,
        })
    }

    btnContent2 = (first, second) => {
        return (
            <span>
                {first}
                {second}
            </span>
        )
    }

    largeWindowSize = 1125;

    componentDidMount() {
        if (window.innerWidth >= this.largeWindowSize) {
            this.setState({ largeScreen: true });
        } else {
            this.setState({ largeScreen: false });
        }
        window.addEventListener("resize", this.handleResize);
    }
      
    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }
    
    render() { 
        // ON MOBILE SCREENS
        if (!this.state.largeScreen && this.state.view === 'MenuCategoryList') {
            return (
                <div className="Body">
                    <div className="MenuCategoryList-container">
                        {this.state.editing.isEditing === false ? 
                            <div className="button-holder">
                                <Button 
                                    text={this.btnContent2(
                                        // <img className="cart-icon" src={cartIcon} />,
                                        <CartIcon className="cart-icon" />,
                                        <span>{this.state.cart.length}</span>
                                    )} 
                                    buttonClick={() => this.changeView('Cart')} 
                                    classNames="cart-btn"
                                />
                            </div>
                        : ''}
                        <MenuCategoryList 
                            menuData={[...menuData]} 
                            categorySelect={this.categorySelect} 
                        />
                    </div>
                </div>
            );
        }
        if (!this.state.largeScreen && this.state.view === 'MenuItemList') {
            return (
                <div className="Body">
                    <div className="MenuItemList-container">
                        {this.state.editing.isEditing === false ?
                            <div className="button-holder">
                                <Button 
                                    text={this.btnContent2(
                                        // <img className="cart-icon" src={cartIcon} />,
                                        <CartIcon className="cart-icon" />,
                                        <span>{this.state.cart.length}</span>
                                    )} 
                                    buttonClick={() => this.changeView('Cart')} 
                                    classNames="cart-btn"
                                />
                                <Button 
                                    text={this.btnContent2(
                                        // <img className="back-icon" src={backIcon} />,
                                        <BackIcon className="back-icon" />
                                    )} 
                                    buttonClick={() => this.changeView('MenuCategoryList')} 
                                    classNames="back-btn"
                                />
                            </div>
                        : ''}
                        <MenuItemList 
                            category={this.state.category} 
                            itemSelect={this.itemSelect} 
                        />
                    </div>
                </div>
            )
        }
        if (!this.state.largeScreen && this.state.view === 'MenuItemDetail') {
            return (
                <div className="Body">
                    <div className="MenuItemDetail-container">
                        {this.state.editing.isEditing === false ?
                            <div className="button-holder">
                                <Button 
                                    text={this.btnContent2(
                                        // <img className="cart-icon" src={cartIcon} />,
                                        <CartIcon className="cart-icon" />,
                                        <span>{this.state.cart.length}</span>
                                    )} 
                                    buttonClick={() => this.changeView('Cart')} 
                                    classNames="cart-btn"
                                />
                                <Button 
                                    text={this.btnContent2(
                                        // <img className="back-icon" src={backIcon} />,
                                        <BackIcon className="back-icon" />
                                    )}
                                    buttonClick={() => this.changeView('MenuItemList')} 
                                    classNames="back-btn"
                                />
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
                            includeCheeseSelect={this.includeCheeseSelect}
                            cheeseSplitSelect={this.cheeseSplitSelect}
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
                </div>
            )
        }
        if (!this.state.largeScreen && this.state.view === 'ItemAdded') {
            return (
                <div className='Body'>
                    <div className="ItemAdded-container">
                        <ItemAdded currentItem={this.state.currentItem} changeView={this.changeView} />
                    </div>
                </div>
            )
        }
        if (!this.state.largeScreen && this.state.view === 'Cart') {
            return (
                <div className='Body'>
                    <div className="Cart-container">
                        <Button 
                            text="Keep Shopping" 
                            buttonClick={this.continueShopping} 
                            classNames="keep-shopping-btn"
                        />
                        <Cart 
                            cart={this.state.cart} 
                            removeFromCart={this.removeFromCart} 
                            editCartItem={this.editCartItem}
                        />
                    </div>
                </div>
            )
        }

        // ON LARGE SCREENS
        if (this.state.largeScreen) {
            return (
                <div className='large-screen-body'>
                    <div className="MenuCategoryList-container">
                        <MenuCategoryList 
                            menuData={[...menuData]} 
                            categorySelect={this.categorySelect} 
                        />
                    </div>
                    <div className='center-panel'>
                        {this.state.view === 'MenuItemList' ?
                            <div className="MenuItemList-container">
                                <MenuItemList 
                                    category={this.state.category} 
                                    itemSelect={this.itemSelect} 
                                />
                            </div>
                        : ''}
                        {this.state.view === 'MenuItemDetail' ?
                            <div className="MenuItemDetail-container">
                                {this.state.editing.isEditing === false ?
                                    <div className="button-holder">
                                        <Button 
                                            text={this.btnContent2(
                                                // <img className="back-icon" src={backIcon} />,
                                                <BackIcon className="back-icon" />
                                            )}
                                            buttonClick={() => this.changeView('MenuItemList')} 
                                            classNames="back-btn"
                                        />
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
                                    includeCheeseSelect={this.includeCheeseSelect}
                                    cheeseSplitSelect={this.cheeseSplitSelect}
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
                        : ''}
                        {this.state.view === 'ItemAdded' ?
                            <div className="ItemAdded-container">
                                <ItemAdded 
                                    currentItem={this.state.currentItem} 
                                    changeView={this.changeView} 
                                    largeScreen={this.state.largeScreen}
                                />
                            </div>
                        : ''}
                        {this.state.view === 'MenuCategoryList' ? 
                            <div className='empty-panel'>
                                <p>Select a menu category from the left</p>
                            </div>
                        : this.state.view === 'Cart' ? 
                        <div className='empty-panel'>
                            <p>Select a menu category from the left</p>
                        </div>
                        : ''}
                    </div>
                    <div className="Cart-container">
                        <Cart 
                            cart={this.state.cart} 
                            removeFromCart={this.removeFromCart} 
                            editCartItem={this.editCartItem}
                        />
                    </div>
                </div>
            )
        }
    }
}
 
export default Body;