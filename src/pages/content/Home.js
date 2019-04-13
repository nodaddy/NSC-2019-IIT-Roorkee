import React, {Component, Fragment} from 'react';
import {Carousel, Organizing} from '../../components';


export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Carousel/>
                <p style={{padding:'2vh'}}>
                    <h5 style={{color:'blue',textShadow:'1px 1px green'}}>Call for Papers</h5>
                    The 3 days national conference will have a keynote
                    address and invited talks from eminent
                    technologists/researchers working in various
                    domains of system engineering.
                    NSC-2019 seeks high quality papers from industry,
                    academia, research institutions and government
                    organizations on both practical applications and
                    theoretical advancements in systems engineering.
                    Some of the topics identified for the conference are
                    as under (This is not an exhaustive list and papers are
                    invited on other related topics as well)<br/><br/>
                    <ul>
                        <li> Computing systems</li>
                        <li>Consciousness systems</li>
                        <li>Electrical systems</li>
                        <li>Energy systems</li>
                        <li>General systems</li>
                        <li>Literary and Social systems</li>
                        <li>Machine learning systems</li>
                        <li> Manufacturing systems</li>
                        <li> Mechanical systems</li>

                        <li>Multibody systems</li>
                        <li>Quantum and Nano systems</li>
                        <li> Emerging technologies</li>
                    </ul>
                </p>
                <p>
                    <h5 style={{color:'blue',textShadow:'1px 1px green'}}>National Systems Conference</h5>
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
                </p>
            </Fragment>
        );
    }
}