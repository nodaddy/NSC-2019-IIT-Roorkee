import React, {Component, Fragment} from 'react';
import {Carousel, Footer, Header, LeftNav, RightNav} from '../components';
import Grid from "@material-ui/core/Grid";


export default class Home extends Component{
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
                        <Carousel/>
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