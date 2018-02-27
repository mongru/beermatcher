import React from 'react';

import DetailsModal from './DetailsModal.jsx';
import ModalBeerTile from './ModalBeerTile.jsx';

class BeerTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }

    openModal() {
        this.setState({isModalOpen: true});
    }

    closeModal() {
        this.setState({isModalOpen: false});
    }

    render() {
        const {
            image,
            name,
            tagline,
            ibu,
            abv,
            ebc,
            description,
            brewerTips
        } = this.props;
        const {isModalOpen} = this.state;

        return (
            <div className="main__content">

                <div className="main__content--beertile" onClick={() => this.openModal()}>
                    <figure className="main__content--img">
                        <img src={image} alt="beer bottle"/>
                    </figure>
                    <figcaption className="main__content--description">
                        <h2>{name}</h2>
                        <p>{tagline}</p>
                    </figcaption>
                </div>

                <DetailsModal className="main__content--modal" isOpen={isModalOpen} onClose={() => this.closeModal()}>

                    <button className="modal--btn" onClick={() => this.closeModal()}>✕</button>

                    <div className="modal--wrapper">
                        <figure className="modal--img">
                            <img src={image} alt="beer bottle"/>
                        </figure>
                        <div className="modal--info">

                            <h3 className="modal--info-title">{name}</h3>
                            <p className="modal--info-tagline">{tagline}</p>

                            <div className="modal--info-details">
                                <span>IBU:</span>{ibu}
                                <span>ABV:</span>{abv}
                                <span>EBC:</span>{ebc}
                            </div>
                            <div className="modal--info-description">
                                <p>
                                    {description}
                                </p>
                                <p>
                                    {brewerTips}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="modal--seemore">
                        <span>You might also like:</span>

                        <div className="modal--seemore-gallery">
                            <ModalBeerTile abv={abv}/>
                            <ModalBeerTile abv={abv}/>
                            <ModalBeerTile abv={abv}/>
                        </div>
                    </div>

                </DetailsModal>
            </div>
        );
    }
}

export default BeerTile;
