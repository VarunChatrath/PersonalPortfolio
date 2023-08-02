import React from 'react'
import Home from './Home'
import About from './About'
import ServiceSection from './ServiceSection'
import Portfolio from './Portfolio'
import Freelancer from './Freelancer'
import Contact from './Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AllComponents() {
    return (
        <>
            <Home />
            <About />
            <ServiceSection />
            <Portfolio />
            <Freelancer />
            <Contact />
            <ToastContainer />
        </>
    )
}
