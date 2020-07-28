import React, { Component } from 'react';
import menuData from '../../menuData';
import './MenuCategoryList.css';

class MenuCategoryList extends Component {

    handleClick = (e) => this.props.categorySelect(e);

    categoryList = menuData.map(cat => {
        return (
            <li 
                className="MenuCategoryList-item" 
                key={cat.id}
                onClick={() => (
                    this.handleClick(cat)
                )}
            >
                <img src={cat.imageUrl} alt={cat.category} />
                <div>
                    <h2>{cat.category}</h2>
                    <p>{cat.description}</p>
                </div>
            </li>
        )
    })
    render() { 
        return (  
            <ul className="MenuCategoryList">
                {this.categoryList}
            </ul>
        );
    }
}
 
export default MenuCategoryList;