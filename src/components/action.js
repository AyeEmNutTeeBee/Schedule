import React, { Component } from 'react';

class Action extends Component {
    render() {
        return (
            <div className={`${this.props.className} action`}>
                +
                -
            </div>
        )
    }
}

export default Action;