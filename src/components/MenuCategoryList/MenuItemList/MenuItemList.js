import React, { Component } from 'react';
import './MenuItemList.css';

class MenuItemList extends Component {

    itemList = this.props.category.items.map(item => {
        return (
            <li>{item.name}</li>
        )
    })

    render() { 
        return (
            <div className="MenuItemList">
                <h3>{this.props.category.category}</h3>
                <ul className="MenuItemList">
                    {this.itemList}
                </ul>
            </div>
        );
    }
}
 
export default MenuItemList;