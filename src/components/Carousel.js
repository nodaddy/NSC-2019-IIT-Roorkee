import React, {Component} from 'react'
import {
    carousel_01,
    carousel_02,
    carousel_03,
    carousel_04,
    carousel_05,
    carousel_06,
    carousel_07,
    carousel_08,
    carousel_09,
    carousel_10,
    carousel_11,
    carousel_12,
    carousel_13,
    carousel_14,
    carousel_15,
    carousel_16,
    carousel_17,
    Pic1,
    Pic2,
    top9
} from '../assets'
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
                <div>
                    <img style={{height: '55vh'}} src={carousel_01} alt=""/>
            </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_02} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_03} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_04} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_05} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_06} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_07} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_08} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_09} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_10} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_11} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_12} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_13} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_14} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_15} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_16} alt=""/>
                </div>
                <div>
                    <img style={{height: '55vh'}} src={carousel_17} alt=""/>
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

