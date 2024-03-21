import { NavLink } from 'react-router-dom';
import { MenuItem, navMenu } from './constants';
import {
  FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram,FaGooglePlusG,FaLinkedin, FaRss,
} from 'react-icons/fa';

import './nav-menu.scss';

type ShowNavProps = {
  showNavMenu: boolean;
  onClick: () => void;
  // other?: any;
};

export const NavMenu = ({ showNavMenu, onClick }: ShowNavProps) => {
  return (
    <nav className={`navbar ${showNavMenu && 'show'}`} id="navbar">
      <ul className="list-menu">
        {navMenu.map((item: MenuItem) => (
          <li className="item" key={item.name} data-aos="fade-left">
            <NavLink
            to={item.link}
            onClick={() => {
              onClick();
              // Clear the local storage when the user change the page
              localStorage.clear();
            }}            
            className={({ isActive, isPending }) =>
              isActive
              ? "active"
              : isPending
              ? "pending"
              : ""
            } >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='essential bg-footer-bacg lg:flex justify-between items-center'> {/* lg:hidden */}
        <div className='item-title flex text-[#d0daf5] gap-6'>
          <h5 data-aos=""><a href='#'>Terms</a></h5>
          <h5 data-aos=""><a href='#'>Privacy</a></h5>
          <h5 data-aos=""><a href='#'>Cookies</a></h5>
          <h5 data-aos=""><a href='#'>Help</a></h5>
        </div>
        <ul className="social-media flex items-center gap-x-4">
          <li>
            <p className='text-parag-color'>Social Media</p>
          </li>
          <li className="icon" data-aos="">
            <a href="https://web.facebook.com/?sk=welcome" target='_blank' rel='noopener noreferrer' title='Facebook'><FaFacebookSquare /></a>
          </li>
          <li className="icon" data-aos="">
            <a href="#" target='_blank' rel='noopener noreferrer' title='Twitter'><FaTwitter /></a>
          </li>
          <li className="icon" data-aos="">
            <a href="https://www.instagram.com/feli_technology/" target='_blank' rel='noopener noreferrer' title='Linkedin'><FaLinkedin /></a>
          </li>
          <li className="icon" data-aos="">
            <a href="#" target='_blank' rel='noopener noreferrer' title='Youtube'><FaYoutube /></a>
          </li>
          <li className="icon" data-aos="">
            <a href="https://www.instagram.com/feli_technology/" target='_blank' rel='noopener noreferrer' title='Instagram'><FaInstagram /></a>
          </li>
          <li className="icon" data-aos="">
            <a href="#" target='_blank' rel='noopener noreferrer' title='Google'><FaGooglePlusG /></a>
          </li>
          <li className="icon" data-aos="">
            <a href="#" target='_blank' rel='noopener noreferrer' title='FaRss'><FaRss /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
