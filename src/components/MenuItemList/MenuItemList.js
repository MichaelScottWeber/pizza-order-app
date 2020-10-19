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
        loadCounter: 0,
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

    itemList = this.props.category.items.map(item => {
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

    // componentDidUpdate(prevState) {
    //     if(this.state !== prevState) {
    //         if (this.state.loadCounter === this.props.category.items.length) {
    //             this.setState({ loading: false });
    //             return;
    //         }
    //     }
    // }

    render() { 
        return (
            <div className="MenuItemList">
                <h2>{this.props.category.category}</h2>
                <p>{this.props.category.description}</p>
                {this.renderLoadingScreen()}
                <ul className={this.state.loading ? 'hide' : ''} ref={element => {this.listElement = element}}>
                    {this.itemList}
                </ul>
            </div>
        );
    }
}
 
export default MenuItemList;