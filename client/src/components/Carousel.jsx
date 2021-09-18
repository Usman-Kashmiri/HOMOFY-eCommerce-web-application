

const Carousel = () => {
    return (
        // <div id="carouselExampleSlidesOnly" className="carousel slide rounded" data-bs-ride="carousel">
        //     <div class="carousel-inner">
        //         <div class="carousel-item active">
        //             <img src="https://images2.alphacoders.com/718/thumb-1920-718555.png" class="d-block w-100" alt="..." />
        //             <div class="carousel-caption mt-5 d-md-block">
        //                 <span className='nav__logo'><span> WELCOME TO NADEEM BIRDS </span></span>
        //                 <p className='carousel_text'>
        //                     <button className="btn btn-success whatsapp btn-s-p-0"> <i class="fab fa-whatsapp"></i> </button>
        //                     <button className="btn btn-success facebook"> <i class="fab fa-facebook-f"></i> </button>
        //                     <button className="btn instagram"> <i class="fab fa-instagram"></i> </button>
        //                     <button className="btn linkedin"> <i class="fab fa-linkedin-in"></i> </button>
        //                 </p>
        //                 {/* <br />
        //                <br />
        //                 <br />
        //                 <br /> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active bg-dark"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" className='bg-dark'></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" className='bg-dark'></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3" className='bg-dark'></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4" className='bg-dark'></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3740_.jpg" alt="First slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3740_.jpg" alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3740_.jpg" alt="Third slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" alt="Fourth slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="Fifth slide"></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            {/* <div className="carousel-item">
                <img src="..." alt="..."></img>
                <div className ="carousel-caption d-none d-md-block">
                <h5>Welcome!</h5>
                <p>...</p>
                </div>
            </div> */}
            <div className="carousel-caption d-none d-md-block text-dark">
                <h5>Happy Shopping!</h5>
                <p className='carousel_text'>
                    <button className="btn btn-dark whatsapp btn-s-p-0">
                        <a href="https://wa.me/923132390129" target="_blank">
                            <i className="fab fa-whatsapp fs-6 text-success font-weight-bold" aria-hidden="true"></i>
                        </a>
                    </button>
                    <button className="btn btn-dark facebook">
                        <a href="https://www.facebook.com/zain.ammar.14" target="_blank">
                            <i className="fab fa-facebook-square fs-6 text-primary font-weight-bold" aria-hidden="true"></i>
                        </a>
                    </button>
                    <button className="btn btn-dark instagram">
                        <a href="mailto:zainammad05@gmail.com" target="_blank">
                            <i className="far fa-envelope fs-6 text-danger bold font-weight-bold" aria-hidden="true"></i>
                        </a>
                    </button>
                    <button className="btn btn-dark instagram">
                        <a href="https://www.instagram.com/areeb_bin_azim/" target="_blank">
                        <i className="fab fa-instagram"></i>
                        </a>
                    </button>
                    

                </p>
            </div>
        </div>
    );
};

export default Carousel;