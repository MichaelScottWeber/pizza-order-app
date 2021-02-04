import React, { Component } from 'react';

class MenuCategoryList extends Component {
    handleClick = (e) => this.props.categorySelect(e);

    categoryList = this.props.menuData.map(cat => {
        return (
            <li
                key={cat.id}
                onClick={() => (this.handleClick(cat))}
            >
                <button>
                    <h2>{cat.category}</h2>
                </button>
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