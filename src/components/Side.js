import React, {Component, Fragment} from 'react'
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {NavLink} from "react-router-dom";

let st={
    color:'unset',
    textDecoration:'none',
};

export default class Side extends Component{
    state={
        expanded:0
    };
    render(){
        return(
            <Fragment>
                <ExpansionPanel expanded={this.state.expanded===1} onChange={()=>{this.setState({expanded:this.state.expanded===1?0:1})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Call for Papers
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        Submit Abstract<br/>
                        Submit Full Paper<br/>
                        Submission Guidelines<br/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===2} onChange={()=>{this.setState({expanded:this.state.expanded===2?0:2})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Committee
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        Organising Committee<br/>
                        Technical Committee<br/>
                        National Advisory Committee<br/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===3} onChange={()=>{this.setState({expanded:this.state.expanded===3?0:3})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Speakers
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        Show Speakers<br/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===4} onChange={()=>{this.setState({expanded:this.state.expanded===4?0:4})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Guidelines
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        Registration Guidelines<br/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===5} onChange={()=>{this.setState({expanded:this.state.expanded===5?0:5})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Downloads
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        Template for Full Paper<br/>
                        Poster Format<br/>
                        Format for PPT for Presentation<br/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===6} onChange={()=>{this.setState({expanded:this.state.expanded===6?0:6})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Sponsorship
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        Sponsorship Details<br/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===7} onChange={()=>{this.setState({expanded:this.state.expanded===7?0:7})}}>
                    <ExpansionPanelSummary>
                        <NavLink activeClassName="ye" style={st}>Accommodation</NavLink>
                    </ExpansionPanelSummary>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===8} onChange={()=>{this.setState({expanded:this.state.expanded===8?0:8})}}>
                    <ExpansionPanelSummary>
                        <NavLink style={st}>Abstract Book</NavLink>
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