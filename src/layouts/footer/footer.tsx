import {
  FaFacebookSquare, FaYoutube, FaInstagram,FaGooglePlusG,FaLinkedin, FaRss, FaTwitter,
} from 'react-icons/fa';
import { HiArrowSmRight } from 'react-icons/hi';
import './footer.scss';
import React, { useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
//import { FaFacebook, FaTwitter, FaYoutube, FaInstagram,FaGoogle,FaLinkedin } from 'react-icons/fa';
 const Footer: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_ny2we4h', 'template_6w9ax6f', form.current, 'Ri_HY3-lF61cYKx3K')
        .then(
          (response: EmailJSResponseStatus) => {
            console.log('SUCCESS!', response.status, response.text);
            window.alert("email sent successfully");
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    } else {
      console.error('Form reference is not defined.');
    }
  };

  return (
    <footer className="footer bg-footer-bacg footer-color">
    <div className="footer__container xl:max-w-screen-2xl xl:m-auto">

      {/** subscribe by sending email to our email */}
      <div  className="footer__mail text-footer-color">
        <h5 data-aos="fade-left">Subscribe</h5>
        <form ref={form} onSubmit={sendEmail}>
  <div className="input flex items-center justify-between" data-aos="fade-right">
    <input name="from_email" type="text" placeholder="Email address" required />
   <button type="submit" className='text-black'> send </button> 
  </div>
</form>

        <p className='text-footer-color opacity-50' data-aos="fade-left">
          we are here to deliver a goo product and we answer you as soon as you text us Thank you to be with us.!
        </p>
      </div>
    
        <div className="footer__links">
          <div className="footer__link text-footer-color">
            <div className="footer__link_item">
              <h5 data-aos="fade-down-left">Product</h5>
              <ul className='flex flex-col gap-1.5'>
                <li data-aos="fade-right">
                  <a href="/prod">
                    <span>Software</span>
                  </a>
                </li>
                <li data-aos="fade-left">
                  <a href="/networkProd">
                    <span>Networking</span>
                  </a>
                </li>
                <li data-aos="fade-right">
                  <a href="/multimediaProd">
                    <span>Multimedia</span>
                  </a>
                </li>
                <li data-aos="fade-left">
                  <a href="/Itsupport">
                    <span>IT Support</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__link_item">
              <h5 data-aos="fade-down">Explore</h5>
              <ul className='flex flex-col gap-1.5'>
                <li data-aos="fade-left">
                  <a href="#">
                   <HiArrowSmRight />
                   <span>Resources</span>
                  </a>
                </li>
                <li data-aos="fade-right">
                  <a href="#">
                    <HiArrowSmRight />
                    <span>Blog</span>
                  </a>
                </li>
                <li data-aos="fade-left">
                  <a href="#">
                    <HiArrowSmRight />
                    <span>Documents</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__link_item">
              <h5 data-aos="fade-down-left">Company</h5>
              <ul className='flex flex-col gap-1.5'>
                <li data-aos="fade-up-left">
                  <a href="/about">
                    <span>About us</span>
                  </a>
                </li>
                <li data-aos="fade-up-left">
                  <a href="/parteners">
                    <span>Partners</span>
                  </a>
                </li>
                <li data-aos="fade-up-left">
                  <a href="/customers">
                    <span>Customers</span>
                  </a>
                </li>
                <li data-aos="fade-up-left">
                  <a href="/contact">
                    <span>Contact us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='essential-ft'>
            <div className='item-title flex text-footer-color gap-6'>
              <h5 data-aos="flip-left"><a href='#'>Terms</a></h5>
              <h5 data-aos="flip-left"><a href='#'>Privacy</a></h5>
              <h5 data-aos="flip-left"><a href='#'>Cookies</a></h5>
              <h5 data-aos="flip-left"><a href='#'>Help</a></h5>
            </div>
            <ul className="social-media flex items-center gap-x-4">
              <li>
                <p className='text-footer-color opacity-50'>Social Media</p>
              </li>
              <li className="icon" >
                <a href="https://www.facebook.com/FeliTechnology" target='_blank' rel='noopener noreferrer' title='Facebook'><FaFacebookSquare /></a>
              </li>
              <li className="icon" >
                <a href="#" target='_blank' rel='noopener noreferrer' title='Twitter'><FaTwitter /></a>
              </li>
              <li className="icon" >
                <a href="https://www.linkedin.com/company/feli-technology/" target='_blank' rel='noopener noreferrer' title='Linkedin'><FaLinkedin /></a>
              </li>
              <li className="icon" >
                <a href="#" target='_blank' rel='noopener noreferrer' title='Youtube'><FaYoutube /></a>
              </li>
              <li className="icon" >
                <a href="https://www.instagram.com/feli_technology/" target='_blank' rel='noopener noreferrer' title='Instagram'><FaInstagram /></a>
              </li>
              <li className="icon" >
                <a href="#" target='_blank' rel='noopener noreferrer' title='Google'><FaGooglePlusG /></a>
              </li>
              <li className="icon" >
                <a href="#" target='_blank' rel='noopener noreferrer' title='FaRss'><FaRss /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer } 