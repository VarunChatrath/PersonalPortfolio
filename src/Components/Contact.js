import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Replace these with your EmailJS Service ID, Template ID, and User ID
        const serviceID = 'service_t4cvnv6';
        const templateID = 'template_2cfaqoq';
        const userID = 'jF6YLY0jk2CnWwv-l';

        emailjs.sendForm(serviceID, templateID, form.current, userID)
            .then((result) => {
                console.log(result.text);
                // Clear the form after successful submission
                form.current.reset();
                toast.success('Message sent successfully!', {
                    position: 'top-center',
                    autoClose: 3000, // Duration in milliseconds the toast should be displayed
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send message. Please try again later.', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            });
    };

    return (
        <section className="contact py-5" id='contact'>
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="fw-bold mb-5">Contact Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="contact-item d-flex mb-3">
                            <div className="icon fs-4 text-danger">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Email</h3>
                                <p className="text-muted">2001varunchatrath@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item d-flex mb-3">
                            <div className="icon fs-4 text-danger">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Phone</h3>
                                <p className="text-muted">+91 9915293504</p>
                            </div>
                        </div>
                        <div className="contact-item d-flex mb-3">
                            <div className="icon fs-4 text-danger">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Address</h3>
                                <p className="text-muted">H. No. 72 Mohinder Singh Colony, Birring, Jalandhar Cantt, Jalandhar, Punjab, 144005</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <input
                                            type="text"
                                            name="from_name"
                                            className="form-control form-control-lg fs-6 border-0 shadow-sm"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <input
                                            type="email"
                                            name="from_email"
                                            className="form-control form-control-lg fs-6 border-0 shadow-sm"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mb-4">
                                        <input
                                            type="text"
                                            name="subject"
                                            className="form-control form-control-lg fs-6 border-0 shadow-sm"
                                            placeholder="Subject"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mb-4">
                                        <textarea
                                            name="message"
                                            rows="5"
                                            className="form-control form-control-lg fs-6 border-0 shadow-sm"
                                            placeholder="Your Message"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="submit" className="btn btn-danger px-3">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}