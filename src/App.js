import React from 'react';
import './App.css';

import Header from './Components/Header.jsx';
import Loader from './Components/Loader.jsx';
import BeerTiles from './Components/BeerTiles.jsx';
import EndScreen from './Components/EndScreen.jsx';
import Footer from './Components/Footer.jsx';


const getBeerUrl = (page) => `https://api.punkapi.com/v2/beers?page=${page}&per_page=20`;

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            beerList: [],
            page: null,
            isLoading: true,
            noMoreData: false
        }
    }


    // ----------> PAGINATION
    onPaginatedLoad = () => {
        if (!this.state.noMoreData) {
            this.fetchBeerInfo(this.state.page + 1);
        }
        return
    }

    // ----------> FETCH
    fetchBeerInfo = (page) => {
        this.setState({isLoading: true});

        fetch(getBeerUrl(page))
            .then(response => response.json())
            .then(result => {

                if (result.length === 0) {
                    this.setState({
                        isLoading: false,
                        noMoreData: true
                    });
                }

                if (page === 1) {
                    this.setState({
                        beerList: result,
                        page: page,
                        isLoading: false
                    });
                }

                if (page > 1) {
                    this.setState({
                        beerList: [
                            ...this.state.beerList,
                            ...result
                        ],
                        page: page,
                        isLoading: false
                    });
                }
            })
            .catch(err => err);
    }

    componentDidMount() {
        this.fetchBeerInfo(1);
    }

    render() {
        return (
            <div className="main__wrapper">
                <Header/>
                <main>

                    <BeerTiles
                        beerList={this.state.beerList}
                        page={this.state.page}
                        onPaginatedLoad={this.onPaginatedLoad}
                    />

                        { this.state.isLoading && <Loader /> }
                        { this.state.noMoreData && <EndScreen /> }

                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
