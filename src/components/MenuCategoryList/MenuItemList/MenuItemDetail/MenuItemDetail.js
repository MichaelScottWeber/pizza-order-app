import React, { Component } from 'react';
import QuantitySelector from './QuantitySelector/QuantitySelector';
import SizeSelector from './SizeSelector/SizeSelector';
import CrustSelector from './CrustSelector/CrustSelector';
import SauceSelector from './SauceSelector/SauceSelector';
import './MenuItemDetail.css';

class MenuItemDetail extends Component {
    render() { 
        const { currentItem } = this.props;

        return (  
            <div className="MenuItemDetail">
                <img src={currentItem.imageUrl} />
                <h2>{currentItem.name}</h2>
                <p>{currentItem.description}</p>
                <QuantitySelector />
                <SizeSelector />
                <CrustSelector />
                <SauceSelector />
            </div>
        );
    }
}
 
export default MenuItemDetail;