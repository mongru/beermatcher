import React from 'react';

import Loader from './Loader.jsx';


class ModalBeerTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            simBeerName:'',
            simBeerImg:'',
            isLoading: true
        }
    }

    fetchSimilarBeer = () => {
        const fetchSimBeerUrl = `https://api.punkapi.com/v2/beers?abv_gt${this.props.abv}`;

        fetch(fetchSimBeerUrl)

            .then(response => response.json())
            .then(result => {

                const randomIndex = Math.floor(Math.random()*20);
                const simBeerName = result[randomIndex].name;
                const simBeerImg = result[randomIndex].image_url;

                this.setState({
                    simBeerName,
                    simBeerImg,
                    isLoading: false
                });
            })
            .catch(err => err);
    }

    componentDidMount() {
        this.fetchSimilarBeer();
    }

    render() {

        if(this.state.isLoading)
         return <Loader />

        return (
            <div className="modal--seemore-box">
                <figure>
                    <img src={this.state.simBeerImg} alt="similar beer"/>
                </figure>
                <span>{this.state.simBeerName}</span>
            </div>
        );
    }
}

export default ModalBeerTile;
