import React, {Component} from 'react'
import {Pic1, Pic2,top7,top9} from '../assets'
import {Carousel as ReactCarousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class Carousel extends Component {
    render() {
        return (
            <ReactCarousel

                autoPlay={true}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={3000}
                infiniteLoop={true}
            >

                    <div >
                    <img style={{height: '55vh'}} src={Pic2} alt=""/>
            </div>
            <div>
                    <img style={{height: '55vh'}} src={top9} alt=""/>
            </div>
                    <div >
                    <img style={{height: '55vh'}} src={top7} alt=""/>
            </div>
                <div>
                    <img style={{height: '55vh'}} src={Pic1} alt=""/>
                </div>



            </ReactCarousel>
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

