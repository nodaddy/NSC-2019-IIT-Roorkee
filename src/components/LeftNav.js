import React, {Component, Fragment} from 'react'
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";

let st={
    color:'unset',
    textDecoration:'none',
};

export default class LeftNav extends Component{
    state={
        expanded:0
    };
    render(){
        return(
            <Fragment>
                <Grid align="center" sm={12}>
                    <a href="aboutus"><button> About</button></a>
                </Grid>
                <hr/>
                <ExpansionPanel expanded={this.state.expanded===1} onChange={()=>{this.setState({expanded:this.state.expanded===1?0:1})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Call for Papers
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li><a href="submitAbstract">Submit Abstract</a></li>
                            <li><a href="comingsoon">Submit Full Paper</a></li>
                            <li><a href="comingsoon">Submission Guidelines</a></li>
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===2} onChange={()=>{this.setState({expanded:this.state.expanded===2?0:2})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Committee
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li><a href="organizingcommittee">Organising Committee</a></li>
                            <li><a href="comingsoon">Technical Committee</a></li>
                            <li><a href="comingsoon">National Advisory Committee</a></li>
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===3} onChange={()=>{this.setState({expanded:this.state.expanded===3?0:3})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Speakers
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li><a href="comingsoon">Show Speakers</a></li>
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===4} onChange={()=>{this.setState({expanded:this.state.expanded===4?0:4})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Guidelines
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li><a href="comingsoon">Registration Guidelines</a></li>
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===5} onChange={()=>{this.setState({expanded:this.state.expanded===5?0:5})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Downloads
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li><a href="comingsoon">Template for Full Paper</a></li>
                            <li><a href="comingsoon">Poster Format</a></li>
                            <li><a href="comingsoon">Format for PPT for Presentation</a></li>
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===6} onChange={()=>{this.setState({expanded:this.state.expanded===6?0:6})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Sponsorship
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li><a href="comingsoon">Sponsorship Details</a></li>
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===7} onChange={()=>{this.setState({expanded:this.state.expanded===7?0:7})}}>
                    <ExpansionPanelSummary>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li><a href="comingsoon">Accommodation</a></li>
                        </ul>
                    </ExpansionPanelSummary>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===8} onChange={()=>{this.setState({expanded:this.state.expanded===8?0:8})}}>
                    <ExpansionPanelSummary>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li><a href="comingsoon">Abstract Book</a></li>
                        </ul>
                    </ExpansionPanelSummary>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===9} onChange={()=>{this.setState({expanded:this.state.expanded===9?0:9})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Contact
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        Address for correspondence<br/>
                        Dr. V Huzur Saran<br/>
                        Organising Secretary, NSC 2019<br/>
                        Department of Mechanical & Industrial Engineering,<br/>
                        IIT Roorkee, Roorkee-247667<br/>
                        Phone: +91-1332-285682<br/>
                        Email: nscr2019@gmail.com, nsc2019@iitr.ac.in<br/>
                        Website: www.iitr.ac.in/nsc2019<br/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Fragment>
        );
    }
}