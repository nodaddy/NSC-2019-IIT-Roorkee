import React, {Component, Fragment} from 'react';
import {Carousel} from '../../components';


export default class Home extends Component {
    render() {
        return (
            <Fragment>
            <div style={{border: '1px outset gold'}}>
                <Carousel/>
            </div>

                    <h4 style={{color: 'navy'}}><b>Call for Papers</b></h4>
                                                         <div align="justify" style={{fontSize:18}}>
                    The three day national conference will have a keynote
                    address and invited talks from eminent
                    technocrats and researchers working in various
                    domains of systems engineering.
                    NSC-2019 seeks high quality papers from industry,
                    academia, research institutions and government
                    organizations on both practical applications and
                    theoretical advancements in systems engineering.<br/>
            All accepted papers by registered authors will be published in the form of a book by Springer.

            </div>

        <div style={{fontSize:18}} align="justify">
                    <h4 style={{color: 'navy'}}><b>National Systems Conference</b></h4>
                    NSC is an annual event of the Systems Society of
                    India (SSI) devoted to strengthening the systems
                    movement and its applications. The first NSC was
                    organized in 1973 to help create awareness of
                    systems engineering methodologies among planners,
                    designers, builders and operation managers. NSC
                    provides a forum for sharing knowledge and
                    disseminating research findings.
                    This year, the 43 <sup>rd</sup> National Systems Conference (NSC)
                    is being organized by Department of
                    Mechanical &amp; Industrial Engineering, IIT Roorkee in
                    association with Systems Society of India.
                </div>
            </Fragment>
        );
    }
}
