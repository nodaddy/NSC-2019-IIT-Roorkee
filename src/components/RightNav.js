import React, {Component, Fragment} from 'react'

let st={
    color:'unset',
    textDecoration:'none',
};

export default class RightNav extends Component{
    state={
        expanded:0
    };
    render(){
        return(
            <Fragment>
                <h4 style={{color:'blue',textShadow:'1px 1px green'}}>Important Deadlines</h4>
                Submission of abstract:<br/> 30-07- 2019<br/><br/>
                Notification of acceptance:<br/> 20-08- 2019<br/><br/>
                Receipt of final paper:<br/> 20-09- 2019<br/><br/>
                Final acceptance communication:<br/> 05-11- 2019<br/><br/>
                Last date for registration:<br/> 20-11- 2019<br/><br/>
            </Fragment>
        );
    }
}