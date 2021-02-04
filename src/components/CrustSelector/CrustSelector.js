import React, { Component } from 'react';
import ingredientsData from '../../ingredientsData';
import { ReactComponent as Thin } from '../../img/Thin.svg';
import { ReactComponent as ThinSelected } from '../../img/Thin-Selected.svg';
import { ReactComponent as Thick } from '../../img/Thick.svg';
import { ReactComponent as ThickSelected } from '../../img/Thick-Selected.svg';
import { ReactComponent as DeepDish } from '../../img/Deep-Dish.svg';
import { ReactComponent as DeepDishSelected } from '../../img/Deep-Dish-Selected.svg';

class CrustSelector extends Component {

    handleClick = (e) => {
        this.props.crustSelect(e);
        this.props.updatePrice();
    }

    crustIcon = (crust) => {
        if (crust === 'thin') {
            if (crust === this.props.crust) {
                return <ThinSelected />
            } else {
                return <Thin />
            }
        }

        if (crust === 'double-dough') {
            if (crust === this.props.crust) {
                return <ThickSelected />
            } else {
                return <Thick />
            }
        }
        
        if (crust === 'deep-dish') {
            if (crust === this.props.crust) {
                return <DeepDishSelected />
            } else {
                return <DeepDish />
            }
        }
    }

    render() {
        let crustList = ingredientsData.crust.map((crust, index) => {
            return (
                <div
                    className="crust-container"
                    key={crust.type}
                    onClick={() => {
                        this.handleClick(crust.type)
                    }}
                >
                    <button name={crust.type} type='button'>
                        {this.crustIcon(crust.type)}
                    </button>
                    <p className={this.props.crust === crust.type ? 'selected' : ''}>
                        {crust.type}
                    </p>
                </div>
            )
        })

        return (
            <div className='CrustSelector'>
                <h4>Crust:</h4>
                <div className="control-container">
                    {crustList}
                </div>
            </div>
        );
    }
}

export default CrustSelector;