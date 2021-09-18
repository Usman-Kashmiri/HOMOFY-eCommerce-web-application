import React from "react";

const Footer = () => {
    return (
        <div className='container-fluid bg-dark mt-3 pt-3'>
            <div className='row'>
                <div className='col-6'>
                    <p className='fs-2 text-secondary m-0'>Visit Us At:</p>
                    <p className='fs-5 mt-0 text-secondary'>NED University of Engineering and Technology </p>
                    <div className='row px-2'>
                        <a href="https://wa.me/923132390129" target="_blank">
                            <i className="fab fa-whatsapp fs-6 text-success font-weight-bold" aria-hidden="true"><span className='ml-2'>WhatsApp No</span></i>
                        </a>
                    </div>
                    <div className='row px-2'>
                        <a href="https://www.facebook.com/zain.ammar.14" target="_blank">
                            <i className="fab fa-facebook-square fs-6 text-primary font-weight-bold" aria-hidden="true"><span className='ml-2'>Facebook</span></i>
                        </a>
                    </div>
                    <div className='row px-2'>

                        <a href="mailto:zainammad05@gmail.com" target="_blank">
                            <i className="far fa-envelope fs-6 text-danger bold font-weight-bold" aria-hidden="true"><span className='ml-2'>Email</span></i>
                        </a>
                    </div>

                </div>
                <div className="col-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7235.970365416336!2d67.10902877543987!3d24.93257468607936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338bf22becb0f%3A0xd5e50842c5c4867b!2sNED%20University%20Of%20Engineering%20%26%20Technology%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1631683233602!5m2!1sen!2s" width="100%" height="300" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div className="row bg-secondary">
                    <p className='text-light text-end pt-2'>Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2021 Homofy</p>
                
            </div>
        </div>
    );
};

export default Footer;