import React, { Component } from 'react';
import { ReactComponent as Left } from '../../../../../img/Left.svg';
import { ReactComponent as LeftSelected } from '../../../../../img/Left-Selected.svg';
import { ReactComponent as Right } from '../../../../../img/Right.svg';
import { ReactComponent as RightSelected } from '../../../../../img/Right-Selected.svg';
import { ReactComponent as Whole } from '../../../../../img/Whole.svg';
import { ReactComponent as WholeSelected } from '../../../../../img/Whole-Selected.svg';
import './CheeseSelector.css';

class CheeseSelector extends Component {

    handleIncludeToggle = e => this.props.cheeseInclude(e);

    handleSplitClick = e => this.props.cheeseSplit(e);

    render() { 

        const { cheese } = this.props;

        return (  
            <div className='CheeseSelector'>
                <h3>Cheese</h3>
                <div>
                    <input 
                        type='checkbox' 
                        id='cheese' 
                        checked={cheese.include}
                        onChange={this.handleIncludeToggle}
                    />
                    <label htmlFor='cheese'>Include Cheese?</label>
                </div>
                <div>
                    <button className='CheeseSelector-left' onClick={() => this.handleSplitClick('left')}>
                        {cheese.include && cheese.split === 'left' ? <LeftSelected /> : <Left />}
                    </button>
                    <button className='CheeseSelector-whole' onClick={() => this.handleSplitClick('whole')}>
                        {cheese.include && cheese.split === 'whole' ? <WholeSelected /> : <Whole />}
                    </button>
                    <button className='CheeseSelector-right' onClick={() => this.handleSplitClick('right')}>
                        {cheese.include && cheese.split === 'right' ? <RightSelected /> : <Right />}
                    </button>
                </div>
            </div>
        );
    }
}
 
export default CheeseSelector;