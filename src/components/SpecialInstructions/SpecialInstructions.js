import React, { Component } from 'react';

class SpecialInstructions extends Component {

    handleChange = (e) => {
        this.props.recieveSpecialInstructions(e)
    }

    render() { 
        return (  
            // <div className='SpecialInstructions'>
            <div className={this.props.currentItem.ingredients ? 'SpecialInstructions has-ingredients' : 'SpecialInstructions'}>
                <label><h4>Special Instructions</h4></label>
                <textarea 
                    placeholder='Please list any dietary restrictions here'
                    value={this.props.currentItem.specialInstructions}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
 
export default SpecialInstructions;