import React, { Component } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function imagesLoaded(parentNode) {
    const imgElements = parentNode.querySelectorAll("img");
    for (const img of imgElements) {
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

class MenuItemList extends Component {

    state = {
        loading: true
    }

    handleClick = (e) => this.props.itemSelect(e);

    handleStateChange = () => {
        this.setState({
            loading: !imagesLoaded(this.listElement),
        })
    }

    renderLoadingScreen = () => {
        if (!this.state.loading)  {
            return null;
        }
        return (
            <LoadingScreen />
        )
    }

    render() { 
        const itemList = this.props.category.items.map(item => {
            return (
                <li
                    className=""
                    key={item.id}
                    onClick={() => (
                        this.handleClick(item)
                    )}
                >
                    <img src={item.imageUrl} alt={item.name} onLoad={this.handleStateChange} />
                    <h3>{item.name}</h3>
                </li>
            )
        });

        return (
            <div className="MenuItemList">
                <h2>{this.props.category.category}</h2>
                <p>{this.props.category.description}</p>
                {this.renderLoadingScreen()}
                <ul className={this.state.loading ? 'hide' : ''} ref={element => {this.listElement = element}}>
                    {itemList}
                </ul>
            </div>
        );
    }
}
 
export default MenuItemList;