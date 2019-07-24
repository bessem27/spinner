import React, { Component } from 'react';
import SpinnerLoad from './SpinnerLoad';

const LoadingHOC = (WrapComponent) => {
    return class LoadingHOC extends Component {
        render(){
           return this.props.loading ? <SpinnerLoad/> : <WrapComponent {...this.props} />
        }
    }
}

export default LoadingHOC ;