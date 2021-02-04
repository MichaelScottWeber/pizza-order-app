import React, { Component } from 'react';
import { ReactComponent as ExtraLarge } from '../../img/Extra-Large.svg';
import { ReactComponent as ExtraLargeSelected } from '../../img/Extra-Large-Selected.svg';
import { ReactComponent as Large } from '../../img/Large.svg';
import { ReactComponent as LargeSelected } from '../../img/Large-Selected.svg';
import { ReactComponent as Medium } from '../../img/Medium.svg';
import { ReactComponent as MediumSelected } from '../../img/Medium-Selected.svg';
import { ReactComponent as Small } from '../../img/Small.svg';
import { ReactComponent as SmallSelected } from '../../img/Small-Selected.svg';

class SizeSelector extends Component {

    handleClick = (e) => {
        this.props.sizeSelect(e);
        this.props.updatePrice();
    }

    sizeIcon = (size) => {
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
                <div
                    className="size-container"
                    key={size.size}
                    onClick={() => {
                        this.handleClick(size.size)
                    }}
                >
                    <button name={size.size} type='button' >
                        {this.sizeIcon(size.size)}
                    </button>
                    <p className={this.props.size === size.size ? 'selected' : ''}>
                        {size.size}
                    </p>
                </div>
            )
        })

        return (
            <div className='SizeSelector'>
                <h4>Size:</h4>
                <div className="control-container">
                    {sizeList}
                </div>
            </div>
        );
    }
}

export default SizeSelector;