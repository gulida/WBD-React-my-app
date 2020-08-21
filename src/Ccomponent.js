import React, {Component} from 'react';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false,
            count: 0
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleToZero = this.handleToZero.bind(this)
    }

    handleClick () {
        this.setState(state => ({
            visibility: !state.visibility
        }))
    }

    handleIncrement () {
        this.setState(state => ({
            count: state.count++
        }))
    }
    handleDecrement (){
        this.setState(state => ({
            count: state.count--
        }))
    }

    handleToZero () {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <h1>Current: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleToZero}>To zero</button>
            </div>
        )
        /*if (this.state.visibility){
            return (
                <div>
                    <h3>Now you see me!</h3>
                    <button onClick={this.handleClick}>Click</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.handleClick}>Click</button>
                </div>
            );
        }*/
    }
}

Ccomponent.defaultProps = {
    defaultName: ['Alexey', 'Anna', 'Julia']
}
