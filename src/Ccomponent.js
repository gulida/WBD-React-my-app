import React, {Component} from 'react';
import Menu from "./Afcomponent";

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Alex'
        }
    }
    render() {
        const name = this.props.name.map((fname) =>
            <li>{fname}</li>
        );

        const dName = this.props.defaultName.map((fname) =>
            <li>{fname}</li>
        );

        const stateName = this.state.name

        return (
            <div>
                <h1><Menu/></h1>
                <h3>State: {stateName}</h3>
                <h2>Props: </h2>
                <ul>{name}</ul>

                <h2>Default Name: </h2>
                <ol>{dName}</ol>
            </div>
        );
    }
}

Ccomponent.defaultProps = {
    defaultName: ['Alexey', 'Anna', 'Julia']
}
