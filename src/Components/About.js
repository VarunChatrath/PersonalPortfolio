import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {
    return (
        <section className="about py-5" id='about'>
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="fw-bold mb-5">About Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-text">
                            <h3 className="fs-4 mb-3">I'm a self-motivated and enthusiastic MERN Stack Developer with a passion for building exceptional web applications. </h3> <p className='text-muted mt-4 mb-4'>As a MERN Stack Developer, I prioritize continuous learning to keep myself updated with the latest technologies, allowing me to provide cutting-edge solutions. Being a team player, effective communication is important to me, and I enthusiastically embrace challenges. My goal is to contribute my skills and knowledge to a dynamic organization, fostering both personal and professional growth in the field of web development. I am passionate about creating innovative web applications that enhance user experiences and drive business success. Excited for new opportunities, I look forward to being a valuable asset to the team and making a positive impact in the industry.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 d-flex align-items-center">
                                <Link to="https://drive.google.com/file/d/1ZPTgWHcDZX8B0czbt0EDo3n7BtAH1y16/view?usp=sharing" target='_blank' className='btn px-3 btn-danger me-5'>
                                    Download CV
                                </Link>
                                <div className="social-links">
                                    <Link to="#" className='text-dark me-2'><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="#" className='text-dark me-2'><i className="fab fa-twitter"></i></Link>
                                    <Link to="#" className='text-dark me-2'><i className="fab fa-instagram"></i></Link>
                                    <Link to="#" className='text-dark me-2'><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">
                        <div className="skill-item mb-4">
                            <h3 className='fs-6'>HTML</h3>
                            <div class="progress" style={{ height: "5px" }}>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className='fs-6'>CSS</h3>
                            <div class="progress" style={{ height: "5px" }}>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className='fs-6'>JavaScript</h3>
                            <div class="progress" style={{ height: "5px" }}>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className='fs-6'>Bootstrap</h3>
                            <div class="progress" style={{ height: "5px" }}>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className='fs-6'>React JS</h3>
                            <div class="progress" style={{ height: "5px" }}>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className='fs-6'>Node JS</h3>
                            <div class="progress" style={{ height: "5px" }}>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className='fs-6'>Express JS</h3>
                            <div class="progress" style={{ height: "5px" }}>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className='fs-6'>Mongo DB</h3>
                            <div class="progress" style={{ height: "5px" }}>
                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

