import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './screens/home/Home';
import Details from './screens/details/Details';
import BookNow from './screens/book-show/BookShow';
import Confirmation from './screens/confirmation/Confirmation';

const App = () => {
    return (  
        <Switch>
            <Route exact path='/details/:id' component={Details} />
            <Route exact path='/book-show/:id' component={BookNow} />
            <Route path='/confirmation/' component={Confirmation} />
            <Route path='/' component={Home} />
        </Switch>
    );
}

export default App;