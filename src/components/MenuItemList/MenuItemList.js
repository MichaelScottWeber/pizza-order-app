import React, { Component } from 'react';

class MenuItemList extends Component {

    handleClick = (e) => this.props.itemSelect(e);

    itemList = this.props.category.items.map(item => {
        return (
            <li
                className=""
                key={item.id}
                onClick={() => (
                    this.handleClick(item)
                )}
            >
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
            </li>
        )
    });

    render() { 
        return (
            <div className="MenuItemList">
                <h2>{this.props.category.category}</h2>
                <p>{this.props.category.description}</p>
                <ul>
                    {this.itemList}
                </ul>
            </div>
        );
    }
}
 
export default MenuItemList;