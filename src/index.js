import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

import App from './App.js';
import DetailsModal from './Components/DetailsModal.jsx';

class ModalSwitch extends React.Component {
  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/details/1` in a modal, rather than as the
  // main page, keeping the gallery visible behind it.
  //
  // Normally, `/details/1` wouldn't match the gallery at `/`.
  // So, to get both screens to render, we can save the old
  // location and pass it to Switch, so it will think the location
  // is still `/` even though its `/deatils/1`.
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={App} />
          {/* <Route path="/details/:id" component={DetailsModal} /> */}
        </Switch>
        {isModal ? <Route path="/details/:id" component={DetailsModal} /> : null}
      </div>
    );
  }
}


ReactDOM.render(
    <Router>
        <Route component={ModalSwitch} />
    </Router>, document.getElementById('root'));

if(module.hot) {
    module.hot.accept()
}

registerServiceWorker();
