import React, { Component } from 'react';
import ingredientsData from '../../../../../ingredientsData';
import './CrustSelector.css';
import { ReactComponent as Thin } from '../../../../../img/Thin.svg';
import { ReactComponent as ThinSelected } from '../../../../../img/Thin-Selected.svg';
import { ReactComponent as Thick } from '../../../../../img/Thick.svg';
import { ReactComponent as ThickSelected } from '../../../../../img/Thick-Selected.svg';
import { ReactComponent as DeepDish } from '../../../../../img/Deep-Dish.svg';
import { ReactComponent as DeepDishSelected } from '../../../../../img/Deep-Dish-Selected.svg';

class CrustSelector extends Component {

    crustIcon = (crust) => {
        if (crust === 'thin') {
            if (crust === this.props.crust) {
                return <ThinSelected />
            } else {
                return <Thin />
            }
        }
        if (crust === 'thick') {
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
                <div key={crust.type}>
                    <button
                        name={crust.type}
                        type='button'
                        onClick={() => {
                            console.log(crust.type);
                        }}
                    >
                        {this.crustIcon(crust.type)}
                    </button>
                    <p>{crust.type}</p>
                </div>
            )
        })

        return (  
            <div className='CrustSelector'>
                <h3>Crust:</h3>
                {crustList}
            </div>
        );
    }
}
 
export default CrustSelector;