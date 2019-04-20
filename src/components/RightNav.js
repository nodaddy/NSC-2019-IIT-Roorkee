import React, {Component, Fragment} from 'react'
import Grid from "@material-ui/core/Grid";
import {springerlogo} from "../assets";

let st={
    color:'unset',
    textDecoration:'none',
};

export default class RightNav extends Component{
    state={
        expanded:0
    };
    render(){
        let root = "/nsc2019/";
        return(
            <Fragment>
            <div style={{fontSize:16}}>
                <Grid align="center" sm={12}>

                    <a href={ root + "about" }>
                        <button style={{width: '100%', border:'3px outset goldenrod'}}><b> About</b></button>
                    </a>
                </Grid>
            </div>
        <div style={{fontSize:18}}>
        <h4 style={{color:'blue',textShadow:'0px 0px green'}}>Important Dates</h4>

         Start of abstract submission:<br/> 30-05-2019<br/><br/>
        </div>
                <h4 style={{color:'blue',textShadow:'0px 0px green'}}>Important Deadlines</h4>
    <div style={{fontSize:18}}>
                Submission of abstract:<br/> 30-07- 2019<br/><br/>
                Notification of acceptance:<br/> 20-08- 2019<br/><br/>
                Receipt of final paper:<br/> 20-09- 2019<br/><br/>
                Final acceptance communication:<br/> 05-11- 2019<br/><br/>
                Last date for registration:<br/> 20-11- 2019<br/><br/>
            </div>
                <img src={springerlogo} style={{width: '100%'}}/>
            </Fragment>
        );
    }
}
