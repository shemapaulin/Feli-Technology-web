import styles from "./achievements.module.scss";
import Chain from "../../assets/img/7xm.xyz119657.jpg";
import Chain3 from "../../assets/img/7xm.xyz881727.jpg";
import tick from "../../assets/img/success-green-check-mark-icon.svg";
import software from "../../assets/img/Softwaredevelopment.jpg";
import consultancy from "../../assets/img/Consultancy.jpg";
import ITmaintenance from "../../assets/img/ITmaintenance.jpg";
import training from "../../assets/img/Training.jpg";
import Image1 from "../../assets/img/Image1.jpg";
import Image2 from "../../assets/img/Image2.jpg";
import ITmeeting from "../../assets/img/ITmeeting.jpg";
import { ScrollTo } from "@/layouts/ScrollTop";

export const Achievements = () => {
  return (
    <>
    <ScrollTo />
    <section className={styles.achievements_page}>
      <div className={styles.background_image}>
        <img src={Chain3} alt="" />
      </div>

      <div className={`${styles.section__holder}` + " mt-[0rem] px-20"}>
        <div className="flex justify-between gap-3 items-center z-[3] w-full flex-wrap px-0 lg:px-0 lg:flex-nowrap">
          <div className="mb-[10rem] w-full lg:w-[60%]">
            <h2 className="text-white font-bold text-6xl" data-aos="fade-left">
              Pioneering IT Solutions for Remarkable Business Achievements
            </h2>
            <p
              className={
                `${styles.text_mod}` +
                " text-[18px] text-[#FFF] mt-10 md:w-[70%]"
              }>
              FELI Technology Investment Group pioneers IT solutions, propelling
              remarkable business achievements. Our expertise, tailored
              strategies, and unwavering dedication drive transformative
              success, keeping you ahead in the industry.
            </p>
            <button className="inline-flex mt-6 items-center px-6 py-4 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Our portfolio
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
          <div className="relative -mt-[0rem] w-full flex flex-wrap md:justify-center  md:flex-nowrap gap-2 lg:w-[40%] lg:-mt-[20rem]">
            <div className="w-full -mt-[0rem] lg:w-[20rem] lg:-mt-[10rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Pioneering IT Solutions
                  </h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Pioneering IT Solutions: FELI delivers cutting-edge solutions,
                  driving success with innovative strategies that redefine
                  industry norms.
                </p>
              </div>
            </div>
            <div className="w-full relative lg:w-[20rem] top-[0rem] left-[0rem] lg:absolute lg:top-[1rem] lg:left-[10rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">
                    Tailored Strategies for Success
                  </h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  FELI crafts personalized approaches, empowering businesses to
                  thrive, seizing opportunities, and unlocking potential.
                </p>
              </div>
            </div>
            <div className="w-full relative lg:w-[20rem] top-[0rem] -left-[0rem] -z-0 lg:-z-10 lg:absolute lg:top-[5.5rem] lg:-left-[10rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Unwavering Dedication to Excellence
                  </h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  FELI's dedication to excellence creates transformative
                  journeys, ensuring remarkable results and shared success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.section__holder}` + " -mt-[1rem]"}>
        <div
          className={
            `${styles.b4cont}` +
            " flex justify-center mt-[10rem] gap-3 z-[3] w-full flex-wrap px-20 lg:flex-nowrap lg:px-0"
          }>
          <div className="w-full md:w-[40rem] mb-[5rem] mt-10">
            <h2
              className="text-white font-bold text-4xl leading-[4rem]"
              data-aos="fade-left">
              A TRUSTED PARTNER FOR INNOVATIVE IT SOLUTIONS AND BUSINESS
              SUCCESS.
            </h2>
            <hr className="border-[#858585] my-6" data-aos="zoom-in" />
            <div className="flex justify-between items-center gap-4">
              <div>
                <img className="w-[18rem] rounded-full" src={Chain} alt="" />
              </div>
              <div>
                <p className="text-white">
                  Felitechonology Ltd remains steadfast in its pursuit of
                  excellence, continually striving to exceed customer
                  expectations while contributing to the development and
                  progress of Rwanda.
                </p>
              </div>
            </div>
            <hr className="border-[#858585] my-6" data-aos="zoom-in" />
          </div>
          <div className={styles.card}>
            <div className="relative max-w-sm bg-white border border-2 border-white shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="absolute top-3 right-3">
                <a
                  href="#"
                  className="inline-flex items-center px-2 py-4 text-sm font-medium text-center text-blue-800 bg-white rounded-full hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg
                    className="w-3.5 h-3.5 ml-2 mr-2 -rotate-45"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={software}
                  alt="Block chain"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Software Development
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Our comprehensive approach to Software Development encompasses
                  not only robust functionality but also exceptional User
                  Interface (UI) and User Experience (UX) design.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={`${styles.text}` + " flex gap-3 my-5"}>
              <h2 className="text-white">100M+</h2>
              <p className="text-white">
                Capital in projects related to technology
              </p>
            </div>
            <div className="relative max-w-sm bg-white border border-2 border-white shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="absolute top-3 right-3">
                <a
                  href="#"
                  className="inline-flex items-center px-2 py-4 text-sm font-medium text-center text-blue-800 bg-white rounded-full hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg
                    className="w-3.5 h-3.5 ml-2 mr-2 -rotate-45"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={consultancy}
                  alt="Block chain"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    IT Consultancy
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  FELI's IT Consultancy optimizes budgets with cost-effective
                  solutions and resource allocation. Streamline processes and
                  drive productivity with expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.section__holder}` + " -mt-[1rem]"}>
        <div
          className={
            `${styles.b4cont}` +
            " flex justify-center mt-[10rem] gap-3 z-[3] w-full flex-wrap px-20 lg:flex-nowrap lg:px-0"
          }>
          <div className={styles.card}>
            <div className={`${styles.text}` + " flex gap-3 my-5"}>
              <h2 className="text-white">100M+</h2>
              <p className="text-white">
                Capital in projects related to technology
              </p>
            </div>
            <div className="relative max-w-sm bg-white border border-2 border-white shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="absolute top-3 right-3">
                <a
                  href="#"
                  className="inline-flex items-center px-2 py-4 text-sm font-medium text-center text-blue-800 bg-white rounded-full hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg
                    className="w-3.5 h-3.5 ml-2 mr-2 -rotate-45"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={training}
                  alt="Block chain"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Training Center
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Our diverse range of IT courses and workshops cover various
                  technologies and skillsets.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className="relative max-w-sm bg-white border border-2 border-white shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="absolute top-3 right-3">
                <a
                  href="#"
                  className="inline-flex items-center px-2 py-4 text-sm font-medium text-center text-blue-800 bg-white rounded-full hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg
                    className="w-3.5 h-3.5 ml-2 mr-2 -rotate-45"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={ITmaintenance}
                  alt="Block chain"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Maintenance
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  With proactive maintenance and regular updates, we ensure
                  optimal performance and minimize downtime.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40rem] mb-[5rem] mt-10">
            <h2
              className="text-white font-bold text-4xl leading-[4rem]"
              data-aos="fade-left">
              INVESTING IN CUTTING-EDGE TECHNOLOGY AND BUSINESS INNOVATION
              PROJECTS.
            </h2>
            <hr className="border-[#858585] my-6" data-aos="zoom-in" />
            <div className="flex justify-between items-center gap-4">
              <div>
                <img
                  className="w-[18rem] rounded-full"
                  src={Chain}
                  alt={Chain}
                />
              </div>
              <div>
                <p className="text-white">
                  Distributed ledger technologies, famously exemplified by
                  blockchain
                </p>
              </div>
            </div>
            <hr className="border-[#858585] my-6" data-aos="zoom-in" />
          </div>
        </div>
      </div>

      <div className="text-center flex justify-center flex-wrap mt-[15rem]">
        <h2
          className="text-white font-bold text-4xl w-[60%] leading-[4rem]"
          data-aos="fade-left">
          PIONEERING INNOVATION AND DRIVING BUSINESS GROWTH
        </h2>
      </div>
      <div className={styles.flexImage}>
        <div>
          <div className="py-4">
            <span className="bg-[#67a878] px-3 py-2 rounded-full">
              Powerful analytics
            </span>
          </div>
          <h2
            className="text-white font-bold text-3xl leading-[4rem]"
            data-aos="fade-left">
            WE ARE GUIDED BY OUR CORE VALUES OF INTEGRITY, INNOVATION,
            COLLABORATION, AND CUSTOMER SATISFACTION.
          </h2>
          <p
            className={
              `${styles.text_mod}` +
              " text-[18px] text-[#FFF] mt-10 md:w-[70%] sm:w-[100%]"
            }>
            In FELI Technology Investment Group, our mission is to empower
            businesses with cutting-edge technology solutions that drive growth
            and success.
          </p>
          <hr className="border-[#858585] my-6" data-aos="zoom-in" />
          <div className="flex gap-3 flex-nowrap md:flex-wrap lg:flex-nowrap">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg
                className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Cutting-Edge Expertise
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                FELI Technology Investment Group excels in delivering
                cutting-edge IT solutions, leveraging innovation and expertise
                to drive business success.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:underline">
                See our guideline
                <svg
                  className="w-3 h-3 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg
                className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Enduring Excellence
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                With a strong commitment to core values like integrity and
                customer satisfaction, FELI builds enduring partnerships while
                prioritizing excellence in service.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:underline">
                See our guideline
                <svg
                  className="w-3 h-3 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-left">
            <img className="h-[50rem]" src={Image1} alt="image hold" />
          </div>
        </div>
      </div>
      <div className={styles.flexImage}>
        <div>
          <div data-aos="fade-left">
            <img className="h-[50rem]" src={Image2} alt="image hold" />
          </div>
        </div>
        <div>
          <div className="py-4">
            <span className="bg-[#67a878] px-3 py-2 rounded-full">
              Powerful analytics
            </span>
          </div>
          <h2
            className="text-white font-bold text-3xl leading-[4rem]"
            data-aos="fade-left">
            A TRUSTED PARTNER FOR INNOVATION AND DIGITAL ASSET INVESTMENTS
          </h2>
          <p
            className={
              `${styles.text_mod}` +
              " text-[18px] text-[#FFF] mt-10 md:w-[100%] sm:w-[100%]"
            }>
            FELI is a trusted partner, specializing in innovation and digital
            asset investments, providing expert guidance and solutions for
            business growth.
          </p>
          <hr className="border-[#858585] my-6" data-aos="zoom-in" />
          <div className="flex gap-3 justify-between">
            <div className="">
              <div className="flex mb-3 text-[18px] items-center gap-2">
                <div className="w-[20px]">
                  <img className="w-full" src={tick} alt="Tick" />
                </div>
                <p className="text-white">Trusted Partner for Innovation</p>
              </div>
              <div className="flex mb-3 text-[18px] items-center gap-2">
                <div className="w-[20px]">
                  <img className="w-full" src={tick} alt="Tick" />
                </div>
                <p className="text-white">Digital Asset Investment Expertise</p>
              </div>
              <div className="flex mb-3 text-[18px] items-center gap-2">
                <div className="w-[20px]">
                  <img className="w-full" src={tick} alt="Tick" />
                </div>
                <p className="text-white">Guidance for Business Growth</p>
              </div>
            </div>
            <div className="">
              <div className="flex mb-3 text-[18px] items-center gap-2">
                <div className="w-[20px]">
                  <img className="w-full" src={tick} alt="Tick" />
                </div>
                <p className="text-white">Innovative Solutions Provider</p>
              </div>
              <div className="flex mb-3 text-[18px] items-center gap-2">
                <div className="w-[20px]">
                  <img className="w-full" src={tick} alt="Tick" />
                </div>
                <p className="text-white">
                  Reliable Partner for Digital Assets
                </p>
              </div>
              <div className="flex mb-3 text-[18px] items-center gap-2">
                <div className="w-[20px]">
                  <img className="w-full" src={tick} alt="Tick" />
                </div>
                <p className="text-white">
                  Driving Business Growth Through Innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flexImage}>
        <div>
          <div className="py-4">
            <span className="bg-[#67a878] px-3 py-2 rounded-full">
              Powerful analytics
            </span>
          </div>
          <h2
            className="text-white font-bold text-4xl leading-[4rem]"
            data-aos="fade-left">
            UNLOCKING THE POTENTIAL OF FELI TECHNOLOGY INVESTMENT GROUP
          </h2>
          <p
            className={
              `${styles.text_mod}` +
              " text-[18px] text-[#FFF] mt-10 md:w-[100%] sm:w-[100%]"
            }>
            FELI Technology Investment Group holds immense potential in driving
            business growth through innovative IT solutions and digital asset
            investments. With its unwavering commitment to excellence and
            dedication to customer satisfaction, FELI has established enduring
            partnerships and proven itself as a reliable source for tailored
            strategies that lead to remarkable success.
          </p>
          <hr className="border-[#858585] my-6" data-aos="zoom-in" />
          <div className="flex gap-3">
            <div className="">
              <p className="text-white mb-4">
                <span className="font-bold text-2xl mr-4">25%</span>
                <span>Increase in the environment</span>
              </p>
              <p className="text-white">
                <span className="font-bold text-2xl mr-4">1.7X</span>
                <span>User base growth</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-left">
            <img className="h-[50rem]" src={ITmeeting} alt="image hold" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
