import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {IITRLogo, SSILogo,DSC00242} from "../assets";

export default class Header extends Component{
    render(){


        return(
            <Grid container style={{marginBottom: 0,backgroundImage: 'url('+DSC00242+')',borderBottom:'3px solid gold'}}>
              <Grid sm={2} align="center">
                  <a href="http://www.iitr.ac.in"><img src={IITRLogo} style={{width:'60%',marginTop:'4vh'}}/></a>
              </Grid>
              <Grid sm={8} align="center" style={{padding:'0px'}}>
                  <h1 style={{color:'navy',textShadow:'0px 0px black',fontFamily:'helvatica'}}><b>NSC 2019</b></h1>
                  <h4 style={{fontFamily:'helvatica'}}><b>43<sup>rd</sup> National Systems Conference on Innovative and Emerging Trends in Engineering Systems</b></h4>
                  <h3 style={{color:'green',textShadow:' 1px 1px skyblue'}}>December 6<sup>th</sup> - 8<sup>th</sup>, 2019</h3>
                 <h3 style={{color:'goldenrod', fontFamily:'Times New Roman'}}> <i>Organised by</i> <b> Department of Mechanical and Industrial Engineering, IIT Roorkee </b><br/><i>in association with</i><b> Systems Society of India</b></h3>
              </Grid>
              <Grid sm={2} align="center">
                  <a href="http://sysi.org"> <img src={SSILogo} style={{width:'60%',marginTop:'4vh'}}/></a>
              </Grid>
              <Grid sm={12}>

              </Grid>
          </Grid>
        );
    }
}