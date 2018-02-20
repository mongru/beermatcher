import React from 'react';

import BeerTile from './BeerTile.jsx';


class BeerTiles extends React.Component {

    onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.props.beerList.length) {
            this.props.onPaginatedLoad();
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    render() {

        const { beerList } = this.props;
        

        return (
            <div className="container">
                <div className="row">
                    {beerList.map((beer, i) =>
                        <div className="col-4" key={i}>

                            <BeerTile
                                id={beer.id}
                                name={beer.name}
                                tagline={beer.tagline}
                                image={beer.image_url}
                                description={beer.description}
                                brewerTips={beer.brewers_tips}
                                ibu={beer.ibu}
                                abv={beer.abv}
                                ebc={beer.ebc}
                                foodPairing={beer.food_pairing}
                            />

                        </div>)}
                </div>
            </div>
        );
    };
}

export default BeerTiles;
