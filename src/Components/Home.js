import React from 'react'
import profile from '../images/about.png'
import { Link } from 'react-scroll';

export default function Home() {
    return (
        <section class="home py-5" id='home'>
            <div class="container-lg">
                <div class="row min-vh-100 align-items-center align-content-center">
                    <div class="col-md-6 mt-5 mt-md-0">
                        <div className="home-img text-center">
                            <img src={profile} className="rounded-circle mw-100" alt="profile img" />
                        </div>
                    </div>
                    <div class="col-md-6 mt-5 mt-md-0 order-md-first">
                        <div class="home-text">
                            <p className='text-muted mb-1'>Hello I'm</p>
                            <h1 className='text-danger text-uppercase fs-1 fw-bold'>MERN Stack Developer</h1>
                            <h2 className='fs-4'>Varun Chatrath</h2>
                            <p className='mt-4 text-muted'>I'm a self-motivated MERN Stack Developer with a Bachelor's Degree in Electronics and Communication Engineering. Proficient in Node.js, React, and MongoDB, I've completed successful projects, showcasing my technical skills and problem-solving abilities. I'm passionate about learning and stay updated with the latest technologies. As a team player, I value effective communication and embrace challenges with enthusiasm. Excited to contribute to a dynamic organization and committed to personal and professional growth in web development. </p>
                            <Link to="portfolio" className='btn btn-danger px-3 mt-3'>My Work</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
