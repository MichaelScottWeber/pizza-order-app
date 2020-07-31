import React, { Component } from 'react';
import './SizeSelector.css';
import { ReactComponent as ExtraLarge } from '../../../../../img/Extra-Large.svg';
import { ReactComponent as ExtraLargeSelected } from '../../../../../img/Extra-Large-Selected.svg';
import { ReactComponent as Large } from '../../../../../img/Large.svg';
import { ReactComponent as LargeSelected } from '../../../../../img/Large-Selected.svg';
import { ReactComponent as Medium } from '../../../../../img/Medium.svg';
import { ReactComponent as MediumSelected } from '../../../../../img/Medium-Selected.svg';
import { ReactComponent as Small } from '../../../../../img/Small.svg';
import { ReactComponent as SmallSelected } from '../../../../../img/Small-Selected.svg';

class SizeSelector extends Component {

    handleClick = (e) => this.props.sizeSelect(e);

    sizeIcon =(size) => {
        if (size === 'extra-large') {
            if (size === this.props.size) {
                return <ExtraLargeSelected />
            } else {
                return <ExtraLarge />
            }
        }
        if (size === 'large') {
            if (size === this.props.size) {
                return <LargeSelected />
            } else {
                return <Large />
            }
        }
        if (size === 'medium') {
            if (size === this.props.size) {
                return <MediumSelected />
            } else {
                return <Medium />
            }
        }
        if (size === 'small') {
            if (size === this.props.size) {
                return <SmallSelected />
            } else {
                return <Small />
            }
        }
    }

    render() { 
        let sizeList = this.props.availableSizes.map((size, index) => {
            return (
                <div key={size.size}>
                    <button 
                        name={size.size} 
                        type='button' 
                        onClick={() => {
                            this.handleClick(size.size)
                        }}
                    >
                        {this.sizeIcon(size.size)}
                    </button>
                    <p>{size.size}</p>
                </div>
            )
        })

        return (  
            <div className='SizeSelector'>
                <h3>Size:</h3>
                {sizeList}
            </div>
        );
    }
}
 
export default SizeSelector;