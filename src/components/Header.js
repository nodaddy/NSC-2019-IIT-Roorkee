import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {IITRLogo, SSILogo} from "../assets";

export default class Header extends Component{
    render(){
        return(
          <Grid container style={{marginBottom:'3vh'}}>
              <Grid sm={2} align="center">
                  <a href="http://www.iitr.ac.in"><img src={IITRLogo} style={{width:'60%',marginTop:'4vh'}}/></a>
              </Grid>
              <Grid sm={8} align="center" style={{padding:'0px'}}>
                  <h1 style={{color:'navy',textShadow:'1px 1px black'}}><b>NSC 2019</b></h1>
                  <h4>43<sup>rd</sup> National Systems Conference on Innovative and Emerging trends in Engineering System</h4>
                  <h3 style={{color:'green',textShadow:' 1px 1px skyblue'}}>December 6<sup>th</sup> - 8<sup>th</sup>, 2019</h3>
                  <h4> Organised by: Department of Mechanical and Industrial Engineering, IIT Roorkee, Uttarakhand and Systems Society of India</h4>
              </Grid>
              <Grid sm={2} align="center">
                  <a href="http://sysi.org"> <img src={SSILogo} style={{width:'60%',marginTop:'4vh'}}/></a>
              </Grid>

          </Grid>
        );
    }
}