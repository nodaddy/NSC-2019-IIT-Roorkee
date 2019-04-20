import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'

export default class Footer extends Component{
    render(){
        return (

            <Grid align="center" style={{color: 'black', background: 'linear-gradient(silver,lavender)', padding: 10,paddingTop:0}} container>
          <Grid sm={12}>
            <h3 style={{color:'navy'}}>Contact us</h3>
            </Grid>
            <Grid sm={4} align="center">

                   <b style={{color:'darkred',fontSize:16}}>Dr. V Huzur Saran</b><br/>
                   Organising Secretary, NSC 2019<br/>
                   Department of Mechanical &amp; Industrial Engineering,<br/>
                   IIT Roorkee, Roorkee-247667<br/>
                   Phone: +91-1332-285682<br/>
                   Email: saranfme@iitr.ac.in
</Grid>
        <Grid sm={4} align="center">

                                                   <b style={{color:'darkred',fontSize:16}}>Dr. S.P. Harsha</b><br/>
        Joint Secretary, NSC 2019<br/>
        Department of Mechanical &amp; Industrial Engineering,<br/>
        IIT Roorkee, Roorkee-247667<br/>
        Phone: +91-1332-285891 <br/>
        Email: surajfme@iitr.ac.in
        </Grid>
        <Grid sm={4} align="center">

                                                   <b style={{color:'darkred',fontSize:16}}>Dr. Avinash Parashar</b><br/>
       Joint Secretary, NSC 2019<br/>
        Department of Mechanical &amp; Industrial Engineering,<br/>
        IIT Roorkee, Roorkee-247667<br/>
        Phone: +91-1332-284801<br/>
        Email:  drap1fme@iitr.ac.in
        </Grid>

               </Grid>

        );
    }
}