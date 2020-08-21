import React, {Component, useLayoutEffect} from 'react';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            items: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
                input: this.state.input,
                items: [...this.state.items, this.state.input]
            }
        )
    }

    handleChange (event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} type="text" onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>

                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                {/*<input type="text" onChange={this.handleChange}/>
                <h1>{this.state.input}</h1>*/}
            </div>
        )
    }
}
