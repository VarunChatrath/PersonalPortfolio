import React from 'react'
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <nav class="navbar navbar-light fixed-top bg-light shadow-sm">
            <div class="container-lg">
                <Link class="navbar-brand text-danger fw-bold fs-4" to="/">PORTFOLIO</Link>
                <div class="dropdown">
                    <button class="btn btn-secondary btn-danger px-3" id='dropdownMenuButton' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class='fas fa-bars'></i>  </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><Link class="dropdown-item" to="home">Home</Link></li>
                        <li><Link class="dropdown-item" to="about">About</Link></li>
                        <li><Link class="dropdown-item" to="services">Services</Link></li>
                        <li><Link class="dropdown-item" to="portfolio">Portfolio</Link></li>
                        <li><Link class="dropdown-item" to="contact">Contact</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
