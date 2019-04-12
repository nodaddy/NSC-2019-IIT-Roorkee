import React, {Component, Fragment} from 'react';
import {Header, Side, Carousel} from '../components';
import Grid from "@material-ui/core/Grid";


export default class Home extends Component{
render(){
    return(
        <div style={{padding:'2vh'}}>
            <Header/>
            <Grid container>
                <Grid sm={2}>
                    <Side/>
                </Grid>
                <Grid sm={8}>
                    <Carousel/>
                </Grid>
                <Grid sm={2}>

                </Grid>
            </Grid>
        </div>
    );
}
}