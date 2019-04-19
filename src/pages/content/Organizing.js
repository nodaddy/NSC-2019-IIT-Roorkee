import React, {Component} from 'react';
import {ak,bk,vs,sp,ap} from '../../assets'
import Grid from "@material-ui/core/Grid";
export default class Organizing extends Component{

    render()
    {
        return(
            <div style={{fontSize:17}}>
            <div>
                <h3 align="center" style={{color:'#132c68'}}>Organising committee</h3>
                <div>


                        <br/>
<Grid container>
        <Grid sm={12} align="center">
        <b>Patron</b>:<br/>
        <img src={ak} style={{width:100,border: '2px inset lavender'}}/><br/>
                        Prof. A.K. Chaturvedi, <br/>Director, IIT Roorkee<br/><br/>
        </Grid>
</Grid>
        <Grid container>
        <Grid sm={3} align="center">
        <b>Convenor</b>:<br/>
        <img src={bk} style={{width:100,border: '2px inset lavender'}}/><br/>
                         Prof. B.K. Gandhi,<br/>HMIED<br/><br/>
        </Grid>
    <Grid sm={3} align="center">
       <b> Secretary</b>:<br/>
        <img src={vs} style={{width:100,border: '2px inset lavender'}}/><br/>
    Prof. V. Huzur Saran<br/><br/>
    </Grid>
    <Grid sm={3} align="center">
       <b> Secretary</b>:<br/>
        <img src={sp} style={{width:100,border: '2px inset lavender'}}/><br/>
    Prof. S. P. Harsha<br/><br/>
    </Grid>
    <Grid sm={3} align="center">
        <b>Secretary</b>:<br/>
        <img src={ap} style={{width:100,border: '2px inset lavender'}}/><br/>
    Prof. Avinash Parashar<br/>
    </Grid>


</Grid>
                    <hr/>


                    <h3>Members:</h3>
                    Prof. B.K. Mishra<br/>
                    <br/>
                    Prof. R. S. Mulik<br/>
                    <br/>
                    Prof. I. V. Singh<br/>
                    <br/>
                    Prof. Akshay Dvivedi<br/>
                    <br/>
                    Prof. K. Murugesan<br/>
                    <br/>
                    Prof. P. M. Pathak<br/>
                    <br/>
                    Prof. Vishal Kumar<br/>
                    <br/>
                    Prof. Satish C Sharma<br/>
                    <br/>
                    Prof. P.K. Jha<br/>
                    <br/>
                    Prof. Shailesh Ganpule<br/>
                </div>
            </div>
        </div>
        );
    }
}