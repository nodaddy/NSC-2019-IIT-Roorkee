import React, {Component, Fragment} from 'react'
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {conferenceregistration, posterprep, springerguide,conferenceschedule} from "../assets"

let st={
    color:'unset',
    textDecoration:'none',
};

export default class LeftNav extends Component{
    state={
        expanded:0
    };
    render(){
        let root = "/nsc2019/";
        return(
            <Fragment>
        <div style={{fontSize:16,padding: '2px'}} align="center">
            <a style={{textDecoration: 'none', padding: '2px'}} href={root}>
            <button style={{width: '100%', border:'3px outset goldenrod',marginBottom: '1vh'}}> <b>Home</b></button>
        </a>


                <a href={conferenceregistration} target="_registr" style={{borderRadius:0,width: '100%'}}> <ExpansionPanel expanded={this.state.expanded === 7}
                                                                                    onChange={() => {
                                                                                        this.setState({expanded: this.state.expanded === 7 ? 0 : 7})
                                                                                    }}
                                                                                    style={{backgroundColor: 'navy'}}>
                    <ExpansionPanelSummary>

                        <p style={{textDecoration: 'none', color: 'white', padding: '0px',}}>Registration</p>

                    </ExpansionPanelSummary>
                </ExpansionPanel>
                </a>
                <ExpansionPanel expanded={this.state.expanded===1} onChange={()=>{this.setState({expanded:this.state.expanded===1?0:1})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Call for Papers
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li style={{marginBottom: '5px', border: '1px solid blue'}}><a
                                style={{textDecoration: 'none', padding: '2px',}} href={root + "submitAbstract"}>Submit
                                Abstract</a></li>
                            <li style={{marginBottom: '5px', border: '1px solid blue'}}><a
                                style={{textDecoration: 'none', padding: '2px',}} href={root + "fulllengthpaper"}>Submit
                                Full
                                Paper</a></li>

                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===2} onChange={()=>{this.setState({expanded:this.state.expanded===2?0:2})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Committee
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li style={{marginBottom: '5px', border: '1px solid blue'}}><a
                                style={{textDecoration: 'none', padding: '2px',}} href={root + "organizingcommittee"}>Organising
                                Committee</a></li>
                            <li style={{marginBottom: '5px', border: '1px solid blue'}}><a
                                style={{textDecoration: 'none', padding: '2px',}} href={root + "technicalcommittee"}>Technical
                                Committee</a></li>
                            <li style={{marginBottom: '5px', border: '1px solid blue'}}><a
                                style={{textDecoration: 'none', padding: '2px',}} href={root + "nationaladvisory"}>
                                Advisory Committee</a></li>
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===3} onChange={()=>{this.setState({expanded:this.state.expanded===3?0:3})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Speakers
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li style={{marginBottom: '5px', border: '1px solid blue'}}><a
                                style={{textDecoration: 'none', padding: '2px',}} href={root + "comingsoon"}>Show
                                Speakers</a>
                            </li>
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===4} onChange={()=>{this.setState({expanded:this.state.expanded===4?0:4})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Themes
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li style={{marginBottom: '5px', border: '1px solid blue'}}><a
                                style={{textDecoration: 'none', padding: '2px',}} href={root + "themes"}>NSC-2019 Themes</a></li>
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
        <ExpansionPanel expanded={this.state.expanded===40} onChange={()=>{this.setState({expanded:this.state.expanded===40?0:40})}}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        Conference Schedule
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
    <li style={{marginBottom: '5px', border: '1px solid blue'}}>     <a style={{textDecoration: 'none', padding: '2px'}}
        href={conferenceschedule} target="schedule">Conference Schedule</a></li>
        </ul>
        </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={this.state.expanded===41} onChange={()=>{this.setState({expanded:this.state.expanded===41?0:41})}}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
         Format for full paper
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
    <li style={{marginBottom: '5px', border: '1px solid blue'}}>    <a style={{textDecoration: 'none', padding: '2px'}}
        href={springerguide} target="guide">Template for full paper</a></li>
        </ul>
        </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={this.state.expanded===42} onChange={()=>{this.setState({expanded:this.state.expanded===42?0:42})}}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        Poster Format
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
    <li style={{marginBottom: '5px', border: '1px solid blue'}}>    <a style={{textDecoration: 'none', padding: '2px'}}
        href={posterprep} target="guide">Poster Format</a></li>
        </ul>
        </ExpansionPanelDetails>
        </ExpansionPanel>




                <ExpansionPanel expanded={this.state.expanded===6} onChange={()=>{this.setState({expanded:this.state.expanded===6?0:6})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Sponsorship
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ul style={{listStyle: 'none', paddingLeft: 0}}>
                            <li style={{marginBottom: '5px', border: '1px solid blue'}}><a
                                style={{textDecoration: 'none', padding: '2px',}} href={root + "sponsorship"}>Sponsorship
                                Details</a></li>
                        </ul>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===7} onChange={()=>{this.setState({expanded:this.state.expanded===44?0:44})}}>
                    <ExpansionPanelSummary>

                        <a style={{textDecoration: 'none', padding: '0px',color:'#383838'}}
                           href={root + "accomodation"}>Accommodation</a>

                    </ExpansionPanelSummary>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===8} onChange={()=>{this.setState({expanded:this.state.expanded===8?0:8})}}>
                    <ExpansionPanelSummary>

                        <a style={{textDecoration: 'none', padding: '0px',color:'#383838'}} href={root + "comingsoon"}>Abstract
                            Book</a>

                    </ExpansionPanelSummary>
                </ExpansionPanel>
                <ExpansionPanel expanded={this.state.expanded===9} onChange={()=>{this.setState({expanded:this.state.expanded===9?0:9})}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Contact
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>

                      Email:<br/> nscr2019@gmail.com,<br/>nsc2019@iitr.ac.in<br/><br/>
                        Website address: <br/> www.iitr.ac.in/nsc2019<br/><br/>
             For further details, see footer of the website
        </ExpansionPanelDetails>
                </ExpansionPanel>
</div>
            </Fragment>
        );
    }
}
