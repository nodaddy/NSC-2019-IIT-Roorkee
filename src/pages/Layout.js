import React, {Component, Fragment} from 'react';
import {Footer, Header, LeftNav, RightNav} from '../components';
import Grid from "@material-ui/core/Grid";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {About, ComingSoon, Home, NationalAdvisory, NotFound, Organizing, SubmitAbstract, Technical} from "./content";


export default class Layout extends Component {
render(){
    return(
        <Fragment>
            <div style={{paddingLeft: '1vh', paddingRight: '1vh'}}>
                <Header/>
                <Grid container>
                    <Grid sm={2}>
                        <LeftNav/>
                    </Grid>
                    <Grid sm={8} style={{paddingLeft:'2vh'}}>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/submitAbstract' component={SubmitAbstract}/>
                                <Route path='/comingsoon' component={ComingSoon}/>
                                <Route path='/organizingcommittee' component={Organizing}/>
                                <Route path='/nationaladvisory' component={NationalAdvisory}/>
                                <Route path='/technicalcommittee' component={Technical}/>
                                <Route path='/about' component={About}/>
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
