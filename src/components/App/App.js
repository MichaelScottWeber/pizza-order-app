import React, {Component} from 'react';
import menuData from '../../menuData';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Pizza Order App</h1>
                <ul>
                    {menuData.map((item) => 
                        <li>
                            <h2>{item.category}</h2>
                            <p>{item.description}</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default App;