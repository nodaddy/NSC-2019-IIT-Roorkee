import React, {Component, Fragment} from 'react'
import {mech,Pic1} from '../../assets'
import Grid from '@material-ui/core/Grid'
export default class Venue extends Component {
    render() {
        return (
            <Fragment>
            <div style={{fontSize:17}}>
    <h2 align="center">Conference Venue</h2><br/>
        <h3 align="center">Venue: Mechanical and Industrial Engineering Department, IIT Roorkee</h3>
            <Grid container>

            <Grid sm={12}><img style={{width:'100%'}}src={Pic1}/></Grid>


            </Grid>
<hr/>
        <Grid container>

        <Grid sm={12}> <h3 align="center">Location</h3>       <div  align="center"className="mapouter"><div className="gmap_canvas"><iframe  style={{width:'100%', height:'350px'}} id="gmap_canvas" src="https://maps.google.com/maps?q=Mechanical%20Department%20IIT%20Roorkee&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </Grid>


        </Grid>


        </div>
        </Fragment>
    );
    }
}