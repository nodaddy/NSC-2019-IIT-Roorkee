import React, {Component, Fragment} from 'react';
import {Footer, Header, LeftNav, RightNav} from '../components';
import Grid from "@material-ui/core/Grid";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ComingSoon, Home, NotFound} from "./content";


export default class Layout extends Component {
render(){
    return(
        <Fragment>
            <div style={{padding:'2vh'}}>
                <Header/>
                <Grid container>
                    <Grid sm={2}>
                        <LeftNav/>
                    </Grid>
                    <Grid sm={8}>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/comingsoon' component={ComingSoon}/>
                                <Route path='*' component={NotFound}/>
                            </Switch>
                        </BrowserRouter>
                    </Grid>
                    <Grid sm={2} style={{paddingLeft:'2vh'}}>
                        <RightNav/>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </Fragment>
    );
}
}