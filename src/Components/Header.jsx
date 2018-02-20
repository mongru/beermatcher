import React from 'react';


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="header__logo">
                            <span>beer</span>matcher
                        </h1>
                        <p className="header__credits">Powered by <a href="https://punkapi.com/" target="_blank" rel="noopener noreferrer">Punk Api</a></p>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;
