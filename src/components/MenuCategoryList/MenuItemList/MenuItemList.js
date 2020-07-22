import React, { Component } from 'react';
import './MenuItemList.css';

class MenuItemList extends Component {

    displayPrice = (item) => {
        if (item.price.L) {
            return item.price.L;
        } else {
            return item.price;
        }
    };

    handleClick = (e) => this.props.itemSelect(e);

    itemList = this.props.category.items.map(item => {
        return (
            <li
                className="MenuItemList-item"
                key={item.name}
                onClick={() => (
                    this.handleClick(item)
                )}
            >
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>
                    {item.size} ${this.displayPrice(item)}
                </p>
            </li>
        )
    });

    render() { 
        return (
            <div className="MenuItemList">
                <h2>{this.props.category.category}</h2>
                <ul className="MenuItemList">
                    {this.itemList}
                </ul>
            </div>
        );
    }
}
 
export default MenuItemList;