import React from "react";

export class CalcButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    addValue = (e) => {
        this.setState({count: this.state.count + 1})
}

minusValue = (e) => {
        this.setState({count:this.state.count -1})
}

    render() {
        return (
            <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.addValue}>+</button>
                    <button onClick={this.minusValue}>-</button>
            </div>
        )
    }
}