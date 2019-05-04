import React, {Component} from 'react';
import icons from 'glyphicons'

export default class NationalAdvisory extends Component{
    render(){

        return(
            <div style={{paddingLeft:'5vh',fontSize:16}}>
    <h2 align="center">NSC-2019 Themes</h2>
<br/>
        The upcoming conference is an event in response to the growing need for creating
            awareness and understanding of the Systems engineering methodologies among
        planners, designers, builders, engineers and operation managers. The broad themes
        to be explored at the conference include:
<br/>
           <h4 style={{color:'navy'}}> Computing Systems</h4>

        {icons.dot} Intelligent Systems<br/>
        {icons.dot}  Soft Computing<br/>
        {icons.dot}  Machine learning<br/>
        {icons.dot}  Data analytics<br/>

       <h4 style={{color:'navy'}}> Consciousness systems</h4>
{icons.dot} Consciousness, Wisdom and Intuition based system.<br/>
           <h4 style={{color:'navy'}}> Electrical systems</h4>
{icons.dot} Real time systems<br/>
{icons.dot} Communication Systems<br/>
{icons.dot} Electronic systems<br/>
{icons.dot} Instrumentation systems<br/>
{icons.dot} Control systems<br/>
{icons.dot} Microelectromechanical systems (MEMS)<br/>
{icons.dot} Nanoelectromechanical systems (NEMS)<br/>
     <h4 style={{color:'navy'}}>   Energy systems</h4>
{icons.dot} Renewable energy systems<br/>
{icons.dot} Green energy systems<br/>
{icons.dot} Sustainable systems<br/>
      <h4 style={{color:'navy'}}>  General systems</h4>
{icons.dot} Physical Systems<br/>
{icons.dot} Biological Systems<br/>
{icons.dot} Mathematical Systems<br/>

      <h4 style={{color:'navy'}}>  Literary and social systems</h4>
{icons.dot} Economic Systems<br/>
{icons.dot} Sociological Systems<br/>
{icons.dot} Political Systems<br/>
{icons.dot} Literary Systems<br/>
       <h4 style={{color:'navy'}}> Manufacturing systems</h4>
{icons.dot} Production systems<br/>
{icons.dot} Manufacturing and Process control Systems<br/>
{icons.dot} Advanced materials and processing<br/>
       <h4 style={{color:'navy'}}> Mechanical systems</h4>
{icons.dot} Defence systems<br/>
{icons.dot} Space structure<br/>
{icons.dot} Structural health monitoring<br/>
{icons.dot} Tribology<br/>
{icons.dot} Mechatronics<br/>
     <h4 style={{color:'navy'}}>   Emerging systems</h4>
{icons.dot} Robotics and control systems<br/>
{icons.dot} Under water systems<br/>
{icons.dot} Vibrations and human response<br/>
      <h4 style={{color:'navy'}}>  Quantum and Nano systems</h4>
{icons.dot} Quantum and Nano computing systems<br/>
{icons.dot} Nano structures<br/>
{icons.dot} Smart materials<br/>
        </div>
    );
    }
}