import React, {Component} from 'react';
import Fcomponent from "./Fcomponent";

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.drinks
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    })
                }
            )
    }


    render() {
        const  {error, isLoaded, items} = this.state
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <ul>
                    {items.map((item) => (
                        <div>
                            <li key={item.idDrink}>{item.strDrink}</li>
                            <img width="50" height="50" src={item.strDrinkThumb} />
                        </div>
                    ))}
                </ul>
            )
        }
    }
}
