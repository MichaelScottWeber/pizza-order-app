import React, { Component } from 'react';
import { ReactComponent as Left } from '../../img/Left.svg';
import { ReactComponent as LeftSelected } from '../../img/Left-Selected.svg';
import { ReactComponent as Right } from '../../img/Right.svg';
import { ReactComponent as RightSelected } from '../../img/Right-Selected.svg';
import { ReactComponent as Whole } from '../../img/Whole.svg';
import { ReactComponent as WholeSelected } from '../../img/Whole-Selected.svg';

class SplitSelect extends Component {

    handleClick = e => {
        this.props.splitSelect(e, this.props.index)
    }

    render() { 
        return (  
            <div className='SplitSelect'>
                <button className='SplitSelector-left' onClick={() => this.handleClick('left')}>
                    {this.props.path.split === 'left' ? <LeftSelected /> : <Left />}
                </button>
                <button className='SplitSelector-whole' onClick={() => this.handleClick('whole')}>
                    {this.props.path.split === 'whole' ? <WholeSelected /> : <Whole />}
                </button>
                <button className='SplitSelector-right' onClick={() => this.handleClick('right')}>
                    {this.props.path.split === 'right' ? <RightSelected /> : <Right />}
                </button>
            </div>
        );
    }
}
 
export default SplitSelect;