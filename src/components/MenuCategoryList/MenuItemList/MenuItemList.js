import React, { Component } from 'react';
import './MenuItemList.css';

class MenuItemList extends Component {

    displayPrice = (item) => {
        if (!item.availableSizes) {
            return <span>${item.price}</span>
        } else {
            let listPrices = item.availableSizes.map((size, index) => {
                return (
                    <span key={item+index}>
                        ${size.price}
                        {item.availableSizes[index + 1] ? ' / ' : ''}
                    </span>
                )
            })
            return listPrices;
        }
    };

    handleClick = (e) => this.props.itemSelect(e);

    itemList = this.props.category.items.map(item => {
        return (
            <li
                className="MenuItemList-item"
                key={item.id}
                onClick={() => (
                    this.handleClick(item)
                )}
            >
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>
                    {this.displayPrice(item)}
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