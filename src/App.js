import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import Header from './Components/Header.jsx';
import Loader from './Components/Loader.jsx';
import BeerTiles from './Components/BeerTiles.jsx';
import EndScreen from './Components/EndScreen.jsx';
import Footer from './Components/Footer.jsx';


// const applyUpdateResult = (result) => (prevState) => ({
//   beerList: [...prevState, ...result],
//   page: prevState.page + 1,
//   isLoading: false
// });
//
// const applySetResult = (result) => (prevState) => ({
//   beerList: result,
//   page: 1,
//   isLoading: false
// });


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

    // ----------> fetch 20 beers per page
    onPaginatedLoad = () => {
        if (!this.state.noMoreData) {
            this.fetchBeerInfo(this.state.page + 1);
        }
        return
    }

    // ----------> fetch beers
    fetchBeerInfo = (page) => {
        this.setState({isLoading: true});

        fetch(getBeerUrl(page))
            .then(response => response.json())
            .then(result => this.onSetResult(result, page))
            .catch(err => err);
        }

        onSetResult = (result, page) => {

        //     if (result.length === 0) {
        //            this.setState({
        //                isLoading: false,
        //                noMoreData: true
        //            });
        //        }
        //
        //     if (page === 1) {
        //         this.setState(applySetResult(result));
        //     }
        //
        //     if (page > 1) {
        //         this.setState(applyUpdateResult(result));
        //     }
        // }

                if (result.length === 0) {
                    this.setState({
                        isLoading: false,
                        noMoreData: true
                    });
                }

                if (page === 1) {
                    this.setState({
                        beerList: result,
                        page,
                        isLoading: false
                    });
                }

                if (page > 1) {
                    this.setState({
                        beerList: [
                            ...this.state.beerList,
                            ...result
                        ],
                        page,
                        isLoading: false
                    });
                }
    }

    // ----------> fetch next page on scroll
    onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.state.beerList.length && !this.state.isLoading) {
            this.onPaginatedLoad();
        }
    }

    componentDidMount() {
        this.fetchBeerInfo(1);
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    render() {
        const { beerList, page, isLoading, noMoreData } = this.state;
        return (
            <div className="main__wrapper">
                <Header/>
                <main>
                    <BeerTiles
                        beerList={beerList}
                        page={page}
                    />
                        { isLoading && <Loader /> }
                        { noMoreData && <EndScreen /> }
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
