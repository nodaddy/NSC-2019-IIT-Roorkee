import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";

export default class About extends Component {

    render() {
        return (
            <Fragment>
                <Grid container style={{fontSize:16}}>
                    <Grid sm={12}>

                        <h4 style={{color: 'navy'}}>National Systems Conference</h4>
                        NSC is an annual event of the Systems Society of
                        India (SSI) devoted to strengthening the systems
                        movement and its applications. The first NSC was
                        organized in 1973 to help create awareness of
                        systems engineering methodologies among planners,
                        designers, builders and operation managers. NSC
                        provides a forum for sharing knowledge and
                        disseminating research findings.
                        This year, the 43 rd National Systems Conference (NSC)
                        is being organized by organized by Department of
                        Mechanical &amp; Industrial Engineering, IIT Roorkee in
                        association with Systems Society of India.
                        <hr/>
                        <h4 style={{color: 'navy'}}> IIT Roorkee</h4>
                        Indian Institute of Technology Roorkee (abbreviated IIT Roorkee or IITR), formerly University of
                        Roorkee and
                        Thomason College of Civil Engineering, is a public engineering university located in Roorkee,
                        Uttarakhand,
                        India. Established in 1847 in British India by the then lieutenant governor, Sir James Thomason,
                        it is the oldest
                        technical institution in Asia. It was given university status in 1949 and was converted into an
                        Indian Institute
                        of Technology (IIT) in 2001, thus becoming the seventh IIT to be declared.
                        <br/> click <a href='https://www.iitr.ac.in' target="iitr"
                                       style={{textDecoration: 'none'}}> here </a> to go to the website
                        <hr/>
                        <h4 style={{color: 'navy'}}>Systems Society of India</h4>
                        Systems Society of India (SSI) is a 'professional body' of distinguished Engineers and
                        Scientists from Engineering,
                        Science, Social Studies & Arts disciplines. It promotes advancement of theory, research,
                        application & practice
                        keeping in view the holistic systems approach for the advancement of humankind.
                        <br/> click <a href='http://www.sysi.org' target="ssi"
                                       style={{textDecoration: 'none'}}> here </a> to go to the website


                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}