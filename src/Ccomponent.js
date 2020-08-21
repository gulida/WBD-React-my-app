import React, {Component} from 'react';
import Fcomponent from "./Fcomponent";

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Button not pressed!'
        }

        this.updateData = this.updateData.bind(this)
    }

    updateData = (value) => {
        this.setState({
            name: value
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <Fcomponent updateName={this.updateData} />
            </div>
        )
    }
}
