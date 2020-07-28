import React, { Component } from 'react';
import './SizeSelector.css';

class SizeSelector extends Component {

    sizeList = this.props.sizes.map((size, index) => {
        return (
            <div key={size.size}>
                <button name={size.size} type='button' className={`SizeSelector-${size.size}`}>
                    :)
                </button>
                <p>{size.size}</p>
            </div>
        )
    })

    render() { 
        return (  
            <div className='SizeSelector'>
                <h3>Size:</h3>
                {this.sizeList}
            </div>
        );
    }
}
 
export default SizeSelector;