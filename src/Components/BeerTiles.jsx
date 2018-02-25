import React from 'react';

import BeerTile from './BeerTile.jsx';


const BeerTiles = ({ beerList }) => {
        return (
            <div className="container">
                <div className="row">
                    { beerList.map((beer, i) =>
                        <div className="col-4" key={beer.id}>
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
                        </div>) }
                </div>
            </div>
        );
}

export default BeerTiles;
