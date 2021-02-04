import React, { Component } from 'react';

class LoadingScreen extends Component {
    render() {
        return (
            <div className="LoadingScreen">
                <div className="row row-1">
                    <div className="inner-row-1"></div>
                    <div className="inner-row-2"></div>
                    <div className="inner-row-3"></div>
                </div>
                <div className="row row-2">
                    <div className="inner-row-1"></div>
                    <div className="inner-row-2"></div>
                    <div className="inner-row-3"></div>
                </div>
                <div className="row row-3">
                    <div className="inner-row-1"></div>
                    <div className="inner-row-2"></div>
                    <div className="inner-row-3"></div>
                </div>
            </div>
        );
    }
}

export default LoadingScreen;