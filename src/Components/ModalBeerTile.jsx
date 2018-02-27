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

    fetchSimBeer = () => {
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
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchSimBeer();
    }

    render() {
        const { isLoading, simBeerImg, simBeerName } = this.state;

        if (isLoading)
            return (
             <div className="modal--seemore-box">
                <Loader />
             </div>
            );

        return (
            <div className="modal--seemore-box">
                <figure>
                    <img src={simBeerImg} alt="similar beer"/>
                </figure>
                <span>{simBeerName}</span>
            </div>
        );
    }
}

export default ModalBeerTile;
