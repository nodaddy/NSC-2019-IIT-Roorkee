import React,{Component} from 'react'
import {Pic1, Pic2} from '../assets'

export default class Carousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={Pic1} alt=""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Pic2} alt=""/>
                    <p className="legend">Legend 2</p>
                </div>

            </Carousel>
        );
    }
}










            /*    <div style={{height: '50vh',border:'1px solid antiquewhite'}} id="carouselExampleFade"
                     className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img style={{height: '50vh'}} src={Pic1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img style={{height: '50vh'}} src={Pic2} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
*/

