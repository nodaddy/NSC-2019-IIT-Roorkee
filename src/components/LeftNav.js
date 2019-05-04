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
        <div style={{fontSize:16,padding: '2px', opacity:'0.7'}} align="center">
            <a style={{textDecoration: 'none', padding: '2px'}} href={root}>
            <button style={{width: '100%', border:'3px outset goldenrod',marginBottom: '1vh'}}> <b>Home</b></button>
        </a>



        <a style={{textDecoration:'none',color:'black',}}>          <ExpansionPanel expanded={this.state.expanded===1} onChange={()=>{this.setState({expanded:this.state.expanded===1?0:1})}}>
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
                </ExpansionPanel></a>
           <a style={{textDecoration:'none',color:'black',}}>     <ExpansionPanel expanded={this.state.expanded===2} onChange={()=>{this.setState({expanded:this.state.expanded===2?0:2})}}>
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
                </ExpansionPanel></a>

        <a href={root + "Registration"} style={{textDecoration:'none', color:'black'}}>             <ExpansionPanel expanded={this.state.expanded===101} onChange={()=>{this.setState({expanded:this.state.expanded===101?0:101})}}>
    <ExpansionPanelSummary>

        Registration
        </ExpansionPanelSummary>
        </ExpansionPanel></a>

        <a href={root + "comingsoon"} style={{textDecoration:'none', color:'black'}}>             <ExpansionPanel expanded={this.state.expanded===100} onChange={()=>{this.setState({expanded:this.state.expanded===100?0:100})}}>
    <ExpansionPanelSummary>

       Speakers
        </ExpansionPanelSummary>
        </ExpansionPanel></a>

                   <a href={root + "themes"} style={{textDecoration:'none', color:'black'}}>             <ExpansionPanel expanded={this.state.expanded===7} onChange={()=>{this.setState({expanded:this.state.expanded===44?0:44})}}>
    <ExpansionPanelSummary>

    Themes
            </ExpansionPanelSummary>
            </ExpansionPanel></a>


        <a href={conferenceschedule}  target="schedule" style={{textDecoration:'none', color:'black'}}>             <ExpansionPanel expanded={this.state.expanded===7} onChange={()=>{this.setState({expanded:this.state.expanded===44?0:44})}}>
    <ExpansionPanelSummary>

        Conference Schedule
        </ExpansionPanelSummary>
        </ExpansionPanel></a>

        <a href={posterprep} target="guide" style={{textDecoration:'none', color:'black'}}>             <ExpansionPanel expanded={this.state.expanded===42} onChange={()=>{this.setState({expanded:this.state.expanded===44?0:44})}}>
    <ExpansionPanelSummary>

        Poster Format
        </ExpansionPanelSummary>
        </ExpansionPanel></a>




        <a href={root + "sponsorship"} style={{textDecoration:'none', color:'black'}}>             <ExpansionPanel expanded={this.state.expanded===7} onChange={()=>{this.setState({expanded:this.state.expanded===44?0:44})}}>
    <ExpansionPanelSummary>

        Sponsorship
        </ExpansionPanelSummary>
        </ExpansionPanel></a>
        <a href={root + "venue"} style={{textDecoration:'none', color:'black'}}>             <ExpansionPanel expanded={this.state.expanded===7} onChange={()=>{this.setState({expanded:this.state.expanded===44?0:44})}}>
    <ExpansionPanelSummary>

        Venue
        </ExpansionPanelSummary>
        </ExpansionPanel></a>
        <a href={root + "accomodation"} style={{textDecoration:'none', color:'black'}}>             <ExpansionPanel expanded={this.state.expanded===7} onChange={()=>{this.setState({expanded:this.state.expanded===44?0:44})}}>
    <ExpansionPanelSummary>

        Accommodation
        </ExpansionPanelSummary>
        </ExpansionPanel></a>
                               <a href={root + "comingsoon"} style={{textDecoration:'none', color:'black'}}>             <ExpansionPanel expanded={this.state.expanded===7} onChange={()=>{this.setState({expanded:this.state.expanded===44?0:44})}}>
    <ExpansionPanelSummary>

       Abstract Book
        </ExpansionPanelSummary>
        </ExpansionPanel></a>

</div>
            </Fragment>
        );
    }
}
