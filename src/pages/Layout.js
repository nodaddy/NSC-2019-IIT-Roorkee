import React, {Component, Fragment} from 'react';
import {Footer, Header, LeftNav, RightNav} from '../components';
import Grid from "@material-ui/core/Grid";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {
    About,
    Acco,
    ComingSoon,
    FullPaper,
    Home,
    NationalAdvisory,
    NotFound,
    Organizing,
    Sponsorship,
    SubmitAbstract,
    Technical
} from "./content";


export default class Layout extends Component {
render(){
    return(
        <Fragment>
            <div style={{}}>
                <Header/>
        <br/>
                <Grid container>
                    <Grid sm={2}>
                        <LeftNav/>
                    </Grid>
                    <Grid sm={8} style={{paddingLeft:'2vh'}}>
                        <BrowserRouter basename="/nsc2019">
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/submitAbstract' component={SubmitAbstract}/>
                                <Route path='/comingsoon' component={ComingSoon}/>
                                <Route path='/organizingcommittee' component={Organizing}/>
                                <Route path='/nationaladvisory' component={NationalAdvisory}/>
                                <Route path='/technicalcommittee' component={Technical}/>
                                <Route path='/fulllengthpaper' component={FullPaper}/>
                                <Route path='/sponsorship' component={Sponsorship}/>
                                <Route path='/about' component={About}/>
                                <Route path='/accomodation' component={Acco}/>
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
