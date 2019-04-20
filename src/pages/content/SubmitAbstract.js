import React, {Component, Fragment} from 'react'

export default class SubmitAbstract extends Component{
    render(){
        return(
            <Fragment>
                    <h2>Abstract Submission</h2>
        <div style={{fontSize:17}}>
                    NSC-2019 seeks high quality papers from industry, academia, research institutions and
                    government organizations on both practical applications and theoretical advancements in
                    systems engineering.
                    <br/><br/>


                    <span style={{color:'navy'}}>While submitting Abstract, the following format should be followed:</span>
                    <ul>
                        <li> One paragraph abstract in Times New Roman 10 point size should not exceed 250 words.</li>
                        <li> Title of the abstract should be bold Times New Roman 12 point size.</li>
                        <li> Authors&#39; names [(Last) name first, like &quot;Singh, Amit&quot;]</li>
                        <li> Authors’ affiliation and corresponding authors contact details should be clearly stated.
                        </li>
                        <li> References or key words should not be included with abstract.</li>

                    </ul></div>
            <div style={{fontSize:20, color:'green'}}>
        Authors are requested to submit abstract online using the following weblink:<br/><br/>
        <a style={{border:'1px solid skyblue',padding:'10px',margin:0,backgroundColor: 'darkgreen',color:'white',textDecoration:'none'}}
        href="https://easychair.org/conferences/?conf=nsc2019" target="SubmitAbstract">Submit Abstract</a><br/><br/>
</div>
        <div style={{fontSize:20,color:'darkred'}}>Last date for online submission of abstract is 30.07.2019</div><br/>


            </Fragment>
        );
    }
}