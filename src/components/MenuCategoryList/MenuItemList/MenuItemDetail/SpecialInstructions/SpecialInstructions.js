import React, { Component } from 'react';
import './SpecialInstructions.css';

class SpecialInstructions extends Component {

    handleChange = (e) => {
        this.props.recieveSpecialInstructions(e)
    }

    render() { 
        return (  
            <div className='SpecialInstructions'>
                <label>Special Instructions</label>
                <textArea 
                    value={this.props.currentItem.specialInstructions}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
 
export default SpecialInstructions;