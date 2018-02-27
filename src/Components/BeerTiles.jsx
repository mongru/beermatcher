import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import BeerTile from './BeerTile.jsx';


const BeerTiles = ({ beerList }) => {
        return (
            <div className="container">
                <div className="row">
                    { beerList.map((beer, i) =>
                        <Link
                            key={beer.id}
                            to={{
                                pathname: `/details/${beer.id}`,
                                // this is the trick!
                                state: { modal: true }
                            }}
                        >
                        <div className="col-4" key={beer.id}>
                            <BeerTile
                                beerList={beerList}
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
                        </div>
                    </Link>
                )}
                </div>
            </div>
        );
}

export default BeerTiles;
