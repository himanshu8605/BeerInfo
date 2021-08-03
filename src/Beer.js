import React, { Component,componentDidMount} from 'react'

export class Beer extends Component {

    constructor (){
        super();
    this.state = {
        beerData: []
      };
    }
    componentDidMount()
    {
        fetch('https://api.punkapi.com/v2/beers').then(response => {
            response.json().then(result =>
                {
                    this.beerData=result;
                    console.log( this.beerData);
                })
        }
        

        );
    }
    render() {
        return (
            <div>
                <h1>Hello Beer</h1>
            </div>
        )
    }
}

export default Beer
