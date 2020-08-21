import React, {Component} from 'react';
import Menu from "./Afcomponent";

export default class Ccomponent extends Component {
    render() {
        const name = this.props.name.map((fname) =>
            <li>{fname}</li>
        );

        return (
            <div>
                <h1><Menu/></h1>
                <ul>{name}</ul>
            </div>
        );
    }
}

Ccomponent.defaultProps = {
    name: ['Alexey', 'Anna', 'Julia']
}
