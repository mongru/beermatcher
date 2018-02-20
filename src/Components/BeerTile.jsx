import React from 'react';

import { Link } from 'react-router';

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

        const { id } = this.props;

        return (
            <div className="main__content">

                <Link to={{ pathname: `/details/${id}` }}
                    style={{textDecoration:"none"}}>
                    <div className="main__content--beertile"
                        onClick={() => this.openModal()}>
                        <figure className="main__content--img">
                            <img src={this.props.image} alt="beer bottle"/>
                        </figure>
                        <figcaption className="main__content--description">
                            <h2>{this.props.name}</h2>
                            <p>{this.props.tagline}</p>
                        </figcaption>
                    </div>
                </Link>

                <DetailsModal
                    className="main__content--modal"
                    isOpen={this.state.isModalOpen}
                    onClose={() => this.closeModal()}
                    >

                    <button className="modal--btn" onClick={() => this.closeModal()}>✕</button>
                    <div className="modal--wrapper">
                        <figure className="modal--img">
                            <img src={this.props.image} alt="beer bottle"/>
                        </figure>
                        <div className="modal--info">

                            <h3 className="modal--info-title">{this.props.name}</h3>
                            <p className="modal--info-tagline">{this.props.tagline}</p>

                            <div className="modal--info-details">
                                <span>IBU:</span>{this.props.ibu}
                                <span>ABV:</span>{this.props.abv}
                                <span>EBC:</span>{this.props.ebc}
                            </div>
                            <div className="modal--info-description">
                                <p>
                                    {this.props.description}
                                </p>
                                <p>
                                    {this.props.brewerTips}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="modal--seemore">
                        <span>You might also like:</span>

                        <div className="modal--seemore-gallery">
                            <ModalBeerTile
                                abv={this.props.abv}
                            />
                            <ModalBeerTile
                                abv={this.props.abv}
                            />
                            <ModalBeerTile
                                abv={this.props.abv}
                            />
                            {/* <div className="modal--seemore-box">
                                <figure>
                                    <img src={this.props.image} alt="similiar beer"/>
                                </figure>
                                <span>{this.props.name}</span>
                            </div>
                            <div className="modal--seemore-box">
                                <figure>
                                    <img src={this.props.image} alt="similiar beer"/>
                                </figure>
                                <span>{this.props.name}</span>
                            </div>
                            <div className="modal--seemore-box">
                                <figure>
                                    <img src={this.props.image} alt="similiar beer"/>
                                </figure>
                                <span>{this.props.name}</span>
                            </div> */}
                        </div>
                    </div>

                </DetailsModal>
            </div>
        );
    }
}

export default BeerTile;
