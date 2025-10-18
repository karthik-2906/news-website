import './Footer.css';
import { GrGithub } from "react-icons/gr";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='footer-container'>
            <div className='footer'>
                <span>© {year} <a className='footer-portfolio-link' href='https://www.karthiksivakumar.dev' target='_blank'>Karthik Sivakumar</a>. All rights reserved.</span>
                <a className='footer-github-link' href='/'><GrGithub size={24} /></a>
            </div>
        </footer>
    )
}