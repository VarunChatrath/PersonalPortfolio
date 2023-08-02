import React from 'react'
import img1 from '../images/portfolio/1.png'
import img2 from '../images/portfolio/2.png'
import img3 from '../images/portfolio/3.png'
import img4 from '../images/portfolio/4.png'
import img5 from '../images/portfolio/5.png'
import img6 from '../images/portfolio/6.png'
import { Link } from 'react-router-dom'
export default function Portfolio() {
    return (
        <section class="portfolio py-5" id="portfolio">
            <div class="container-lg py-4">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className='fw-bold mb-5'>Latest Works</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item">
                            <img src={img1} className='w-100 img-thumbnail' alt="portfolio item" style={{ height: "215px" }} />
                            <h3 className='text-capitalize fs-5 my-2'>Ecommerce Website</h3>
                            <div className="">
                                <span className=' mb-4'><Link to="https://lighthearted-llama-4637e0.netlify.app/" target='_blank' className='text-danger text-decoration-none'>Live Demo</Link></span>
                                <span className='mx-2 mb-4'><Link to="https://github.com/VarunChatrath/EssentialEase.git" target='_blank' className='text-danger text-decoration-none'>View Code</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item">
                            <img src={img2} className='w-100 img-thumbnail' alt="portfolio item" style={{ height: "215px" }} />
                            <h3 className='text-capitalize fs-5 my-2'>MERN Chat App</h3>
                            <div className="">
                                <span className=' mb-4'><Link to="https://64c8ea0f145ca46b3ea8f582--guileless-cobbler-8c19c2.netlify.app/" target='_blank' className='text-danger text-decoration-none'>Live Demo</Link></span>
                                <span className='mx-2 mb-4'><Link to="https://github.com/VarunChatrath/SwiftSparkChatApp.git" target='_blank' className='text-danger text-decoration-none'>View Code</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item">
                            <img src={img3} className='w-100 img-thumbnail' alt="portfolio item" style={{ height: "215px" }} />
                            <h3 className='text-capitalize fs-5 my-2'>MERN Food Order Website</h3>
                            <div className="">
                                <span className=' mb-4'><Link to="https://64ca23800d9b01006b4f1dee--charming-bavarois-28ba1e.netlify.app/" target='_blank' className='text-danger text-decoration-none'>Live Demo</Link></span>
                                <span className='mx-2 mb-4'><Link to="https://github.com/VarunChatrath/newfoodapp.git" target='_blank' className='text-danger text-decoration-none'>View Code</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item">
                            <img src={img4} className='w-100 img-thumbnail mt-3' alt="portfolio item" />
                            <h3 className='text-capitalize fs-5 my-2'>React Notes App</h3>
                            <div className="">
                                <span className=' mb-4'><Link to="https://64c9080920da810ac615c555--luxury-lebkuchen-499391.netlify.app/" target='_blank' className='text-danger text-decoration-none'>Live Demo</Link></span>
                                <span className='mx-2 mb-4'><Link to="https://github.com/VarunChatrath/varunNotebook.git" target='_blank' className='text-danger text-decoration-none'>View Code</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item">
                            <img src={img5} className='w-100 img-thumbnail mt-3' alt="portfolio item" />
                            <h3 className='text-capitalize fs-5 my-2'>React News Website</h3>
                            <div className="">
                                <span className='mx-2 mb-4'><Link to="https://github.com/VarunChatrath/newsapp.git" target='_blank' className='text-danger text-decoration-none'>View Code</Link></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item">
                            <img src={img6} className='w-100 img-thumbnail mt-3' alt="portfolio item" />
                            <h3 className='text-capitalize fs-5 my-2'>Text Analyzer</h3>
                            <div className="">
                                <span className=' mb-4'><Link to="https://varunchatrath.github.io/reactTextapp/" target='_blank' className='text-danger text-decoration-none'>Live Demo</Link></span>
                                <span className='mx-2 mb-4'><Link to="https://github.com/VarunChatrath/reactTextapp.git" target='_blank' className='text-danger text-decoration-none'>View Code</Link></span>
                            </div>
                        </div>
                    </div>
                    <h5 className="mt-5 text-center" style={{ justifyContent: "center" }}>
                        Backend may take 30-40 seconds to load due to free hosting. Refresh once.
                    </h5>
                </div>
            </div>
        </section>
    )
}
