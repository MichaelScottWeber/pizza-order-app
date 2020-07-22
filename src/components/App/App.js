import React, {Component} from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <Body />
            </div>
        )
    }
}

export default App;