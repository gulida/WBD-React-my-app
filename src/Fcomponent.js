import React, {Component} from 'react';

class Fcomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Button pressed!'
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.updateName(this.state.name)}>Press</button>
            </div>
        );
    }
}

export default Fcomponent;

