import React, {Component, Fragment} from 'react'

export default class Acco extends Component {
    render() {
        return (
            <Fragment>
            <div style={{fontSize:17}}>
   <h2 align="center">Conference Registration</h2>
        Registration procedure for all NSC-2019 participants is as follows:<br/><br/>
        The category wise registration fees are mentioned hereunder:<br/>

        <table>
        <tr style={{color:'navy'}}>
        <th> Catagory</th>
        <th><b>  Delegate Fees</b></th>
        </tr>
            <tr>
       <th> (a) Industry participants:</th>
        <th><b>   &#x20b9;6000</b></th>
            </tr>
            <tr>
            <th>(b) Participants from R&D/
        Academic Institutions:  </th>
        <th><b>&#x20b9;4000</b></th>
            </tr>
            <tr>
            <th>(c) Student participants: </th>
        <th><b> &#x20b9;1500</b></th>
            </tr>
            </table>
            Student members of SSI will get a concession of 20% over the registration fee applicable.
       <br/>
        <h3 style={{color:'navy'}}>Step 1: Online payment of registration fees:</h3>
            • <a style={{
            textDecoration:'none',
                border: '1px solid skyblue',
                padding: '3px',
                margin: 0,
                backgroundColor: 'darkgreen',
                color: 'white'
        }}
        href="https://www.onlinesbi.com/prelogin/icollecthome.htm?corpID=365641" target="sbiportal">Click
        here</a> to browse the SBI online fees payment portal.<br/>
• At the bottom of page, click Check Box and then click Proceed button for the payment.<br/>
• Select Payment Category: IIT Roorkee Conference<br/>
• Fill the Conference Code: <b>CONFR-100-MID</b><br/>
• Select Category: Individual<br/>
• Registration Fee:<br/>
            o Payable Amount: Please select from the above categories.<br/>
• Remarks: NSC2019-<span style={{color:'red'}}>xyz</span><br/>
        o Replace 'xyz' by the abstract submission number, i.e., 004 for submission number 4 and 012 for<br/>
            submission number 12, etc.<br/>
            o Replace 'xyz' by 000 for registration without submitted abstract<br/>
• Click Submit button to continue.<br/>
    • At the payment gateway, make the payment.<br/>
• A confirmation page will be displayed and a SMS will be sent on the mobile number provided.<br/>
• The <span style={{color:'red'}}>SBCollect Reference Number</span> will be needed while filling the registration form.<br/>
<br/>
            <h3 style={{color:'navy'}}>Step 2: Online Registration</h3>
    •     <a style={{
            textDecoration:'none',
            border: '1px solid skyblue',
                padding: '3px',
                margin: 0,
                backgroundColor: 'darkgreen',
                color: 'white'
        }}
        href="https://docs.google.com/forms/d/e/1FAIpQLSc7p5q0FkL_D2EEc_wDu2ftQ_eT7gbYh3hQaOLAnjgN7grq0w/viewform" target="onlineregistration">Click
        here</a> to open the online registration form.<br/>
• Fill all the required information and submit the duly completed form.<br/><br/>
        </div>
        </Fragment>
    );
    }
}