import Post from '../Components/Posts/Post';
import Trending from '../Components/Posts/Trending';
import NotFound from '../Components/NotFound';

import {Route, Switch } from 'react-router-dom';


export const ContentRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Post/>
            </Route>
            <Route exact path="/trending">
                <Trending/>
            </Route>
            <Route exact path="*">
                <NotFound/>
            </Route>
        </Switch>
    )
}