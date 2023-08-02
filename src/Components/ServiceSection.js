import React from 'react'

export default function ServiceSection() {
    return (
        <section className="services py-5" id="services">
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-18">
                        <div className="section-title text-center">
                            <h2 className="fw-bold mb-5">What I do</h2>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-item shadow-sm p-4 rounded bg-white">
                            <div className="icon my-3 text-danger fs-2">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3 className='fs-5 py-2'>Web Development</h3>
                            <p className='text-muted'>As a skilled web developer, I excel in MERN Stack, creating user-friendly and dynamic websites and applications.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-item shadow-sm p-4 rounded bg-white">
                            <div className="icon my-3 text-danger fs-2">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3 className='fs-5 py-2'>Content Writing</h3>
                            <p className='text-muted'>
                                As a content writer, I create engaging and informative pieces that captivate audiences and convey valuable information.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                        <div className="service-item shadow-sm p-4 rounded bg-white">
                            <div className="icon my-3 text-danger fs-2">
                                <i className="fas fa-image"></i>
                            </div>
                            <h3 className='fs-5 py-2'>Graphic Design</h3>
                            <p className='text-muted'>As a graphic designer, I utilize my creativity to design visually appealing and impactful graphics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
