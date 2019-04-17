import React, {Component} from 'react';
import icons from 'glyphicons'

export default class NationalAdvisory extends Component{
    render(){

        return(
            <div style={{paddingLeft:'5vh'}}>
                <h3 align="center" style={{color:'#132c68'}}>National Advisory committee</h3><br/>
<table align="center" style={{marginLeft:'auto'}}>
    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. A. S. Sekhar</th>
        <th style={{paddingLeft: '10vh'}}> IIT Madras<br/></th>
    </tr>
    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. C. Sujata</th>
        <th style={{paddingLeft: '10vh'}}> IIT Madras<br/></th>
    </tr>
    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. Kshitij Gupta</th>
        <th style={{paddingLeft: '10vh'}}> IIT Delh<br/></th>
    </tr>
    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. Mats Berg</th>
        <th style={{paddingLeft: '10vh'}}>KTH, Stockholm, Sweden<br/></th>
    </tr>
    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. N. S. Vyas</th>
        <th style={{paddingLeft: '10vh'}}> IIT Kanpur<br/></th>
    </tr>
    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. P. K. Kalra</th>
        <th style={{paddingLeft: '10vh'}}> DEI, Agra<br/></th>
    </tr>


    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. Prem Kalra</th>
        <th style={{paddingLeft: '10vh'}}>IIT Delhi<br/></th>
    </tr>
    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. P.K. Jain,</th>
        <th style={{paddingLeft: '10vh'}}> IIT BHU<br/></th>
    </tr>

    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. S.P. Gupta</th>
        <th style={{paddingLeft: '10vh'}}> COER, Roorkee<br/></th>
    </tr>

    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. Vishal Sahni</th>
        <th style={{paddingLeft: '10vh'}}>DEI, Agra<br/></th>
    </tr>
    <tr style={{border: '3px inset silver', fontSize: '2.7vh', fontWeight: 500}}>
        <th> {icons.check} Prof. V. Murty</th>
        <th style={{paddingLeft: '10vh'}}>University of Portland, Portland<br/></th>
    </tr>
</table>
                </div>
        );
    }
}