import React from 'react'
import { Link } from 'react-scroll';

export default function Freelancer() {
    return (
        <section className="freelancer-available py-5 bg-danger">
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <p className="text-light fs-5">
                            Do you have any project?
                        </p>
                        <h2 className='fs-1 text-white mb-4'>I'm Available for Freelancer Projects</h2>
                        <Link to="contact" className="btn btn-outline-light mx-2">Hire me</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
