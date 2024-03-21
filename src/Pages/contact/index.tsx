import React, { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import styles from "./contact.module.scss";
import { ScrollTo } from "@/layouts/ScrollTop";

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_qbqomeo', 'template_25sgukl', form.current,'Ri_HY3-lF61cYKx3K' )
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
    <>
      <ScrollTo />
      <section className={styles.contact_page}>
        <h3 className="text-white" data-aos="fade-down-left">
          Hello! <br />
          we are happy to see you on <br />
          this page. Please tell what <br />
          we can help you ?
        </h3>
        <br />
        <br />
        <section className="py-14 dark:bg-gray-800 dark:text-gray-50 rounded-lg ">
          <div
            className="grid max-w-6xl grid-cols-1 px-9 mx-auto lg:px-8 md:grid-cols-2 md:divide-x "
            data-aos="fade-down"
          >
            <div className=" text-center">
              <h1 className="text-4xl font-bold" data-aos="fade-right">
                Get in touch
              </h1>
              <p className="pt-2 pb-4" data-aos="fade-left">
                Fill in the form to contact us
              </p>
              <br/>
              <div className="space-y-4  ">
                <p className="flex items-center justify-center" data-aos="fade-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Fake address, 9999 City</span>
                </p>
                <p className="flex items-center justify-center " data-aos="fade-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>tel +250 123 456 789</span>
                </p>
                <p className="flex items-center justify-center" data-aos="fade-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>contact@business.com</span>
                </p>
                <a href="/ApplyForm">
                <p className="flex items-center justify-center pt-20 text-3xl" data-aos="fade-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>Apply For Internership</span>
                </p>
                </a>
              </div>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col py-9 space-y-6 md:py-0 md:px-10  "
              data-aos="zoom-in-up"
            >
              <div >
              <span className="block mb-4">Full name</span>
              <input
                type="text"
                placeholder="Hope Mutesi"
                name="from_name"
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
                style={{ border: "2px solid gray" }}
              />
              </div>

              <div>
                <span className="block mb-4">Email address</span>
                <input
                  type="email"
                  name="from_email"
                  placeholder="leroy@mutesi.com"
                  className="block w-full h-10 rounded-md shadow-sm pl-4 focus:ring dark:bg-gray-800"
                  style={{ border: "2px solid gray" }}
                />
              </div>
             <div>
                <span className="block mb-4">Message</span>
                <textarea
                  className="block w-full h-20  rounded-md focus:ring h-30 pl-4 focus:ri focus:ri dark:bg-red"
                  name="message"
                  placeholder="Enter your message"
                  style={{
                    border: "2px solid gray",
                    height: "100px",
                    paddingTop: "10px",
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri" 
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};
