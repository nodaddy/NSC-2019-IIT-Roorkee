import React, {Component, Fragment} from 'react'
import {springerguide} from "../../assets";

export default class FullPaper extends Component {
    render() {
        return (
            <Fragment>
            <div style={{fontSize:17}}>
                <h2>Submit Full Length paper</h2>
                For submission of full length paper you can log in easychair link given below. Full
                manuscript has to be prepared in the prescribed format (maximum six pages) and
                to be submitted for a peer review process latest by 20th September 2019.
                <br/><br/>
                Click
                <a
                    style={{textDecoration: 'none', padding: '2px',}} href={springerguide}
                    target="springerguide"> here</a> for
                guidelines for authors.
                <br/><br/>
                Papers are to be submitted in Pdf format. All submitted papers will be subjected to a
                &quot;similarity test&quot; by Turnitin software for selection purposes.<br/>
                Authors are requested to submit full length paper online using the following weblink:<br/><br/>
                <a style={{
                    border: '1px solid skyblue',
                    padding: '10px',
                    margin: 0,
                    backgroundColor: 'darkgreen',
                    color: 'white'
                }}
                   href="https://easychair.org/conferences/?conf=nsc2019" target="SubmitFullLength">Click
                    Here</a><br/><br/>

</div>
            </Fragment>
        );
    }
}