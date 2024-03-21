import image1 from "../../assets/img/project_1.png";
import image2 from "../../assets/img/thomas.jpg";
import image3 from "../../assets/img/studio.jpg";
import service1 from "../../assets/img/service1.png";
import service2 from "../../assets/img/service2.png";
import service3 from "../../assets/img/service3.png";
import code from "../../assets/img/sample-code-1.png";
import cable from "../../assets/img/network-cable.jpg";
import computer from "../../assets/img/computer-table.jpg";
import Arrow2 from "../../assets/img/Vector.svg";
import styles from "./home.module.scss";
import {
  CardBig,
  CardCoding,
  CardCounter,
  CardMultiMedia,
  CardNetworking,
  CardService,
  DesignContent,
  DesignDescription,
  Swipper2,
} from "@/Components/index";
import {
  BigCard,
  CounterDetail,
  ServiceDescripts,
} from "@/Constants/Content/index";
import { HighlightsProps } from "@/modal/index";
import Chain2 from "../../assets/img/bg-stars-1.webp";
import Africa from "../../assets/img/Africa.png";
import Software from "../../assets/img/Software.jpg";
import { ScrollTo } from "@/layouts/ScrollTop";

export const Home: React.FC = () => {
  const items: HighlightsProps[] = [
    {
      name: "Onisma",
      image: image1,
    },
    {
      name: "Comigra",
      image: image2,
    },
    {
      name: "hagsyo-kingdom",
      image: image3,
    },
  ];

  const videoURL = "https://felitechnology.com/HILLWOOD%20Advert.mp4";

  return (
    <>
      <ScrollTo />
      <section className={styles.home_page}>
      <div
        className={
          `${styles.background_image}` +
          " min-h-screen flex items-center justify-center"
        }>
        <img className="object-cover h-full w-full" src={Software} alt="" />
      </div>
      <div
        className={
          `${styles.background_image}` +
          " min-h-screen flex items-center justify-center mt-[120rem]"
        }>
        <img className="object-cover h-full w-full" src={Chain2} alt="" />
      </div>
      <div
        className={
          `${styles.background_image}` +
          " -left-[20rem] min-h-screen flex items-center justify-center mt-[270rem] md:mt-[220rem]"
        }>
        <img
          className="h-[60rem] w-[60rem] -z-1"
          src={Africa}
          data-aos="fade-down"
          alt=""
        />
      </div>
      <div className="flex flex-wrap rounded-[2rem] gap-3 px-[0%] md:px-[3%] md:mt-20 lg:-mt-20">
        <div className="md:max-w-[100%] px-[2rem]">
          <div className="w-full mt-[10rem] xl:mt-[10rem] 2xl:mt-[15rem]">
            <DesignContent title="Design" image={computer} icon={Arrow2}  />
            <DesignDescription icon={Arrow2}  />
          </div>
        </div>
        <div className="w-full mt-[2rem] xl:mt-[2rem] 2xl:mt-[5rem] z-[5] px-6 md:px-0">
          <div className="w-full p-4 text-center bg-gray-800 rounded-lg shadow-xl sm:p-8">
            <div className="flex flex-wrap lg:flex-nowrap lg:px-10 items-center justify-center sm:space-y-0 sm:space-x-4">
              <h5
                className="w-full lg:w-[45%] mb-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-right sm:text-center"
                data-aos="fade-right">
                Cutting-edge digital solutions drive business success.
              </h5>
              <p
                className="w-full lg:w-[55%] mb-5 text-base text-gray-400 sm:text-lg md:text-left sm:text-center"
                data-aos="fade-left">
                Pioneering, innovative solutions with unwavering excellence.
                Together, we seize endless possibilities for your business
                success. Thrive with us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[5%] mt-[4rem] text-center">
        <h2
          className="text-white text-3xl md:text-5xl font-bold"
          data-aos="fade-up">
          We Can Develop Your Dream
        </h2>
        <p
          className="text-white text-xl font-light mt-10 md:px-[10rem]"
          data-aos="flip-up">
          At FELI Technology Investment Group, we have the expertise to turn
          your dream into reality through innovative solutions and dedicated
          efforts.
        </p>
      </div>
      <div
        className={`${styles.image_hold}` + " flex justify-center"}
        data-aos="fade-left">
        <video
          className="w-full md:w-[70%] rounded-lg"
          src={videoURL}
          autoPlay
          loop
          muted></video>
      </div>
      <div className="mx-[5%] mt-[4rem] text-center">
        <h2
          className="text-white text-3xl md:text-5xl font-bold"
          data-aos="fade-up">
          Our Services
        </h2>
        <p
          className="text-white text-xl font-light mt-10 md:px-[10rem]"
          data-aos="flip-up">
          We delivers cutting-edge IT solutions, driven by excellence and
          tailored to individual goals. Partner with us to thrive in the dynamic
          digital landscape and achieve remarkable success.
        </p>
      </div>
      <div className="mx-[5%] mt-[4rem] grid mb-8 gap-4 rounded-lg  shadow-sm md:mb-12 md:grid-cols-2 lg:grid-cols-3">
        {ServiceDescripts.map((item, index) => (
          <CardService key={index} {...item} />
         
        ))}
      </div>
      <div className={styles.service}>
        <span className={styles.bar_line}></span>
        <div className="2xl:absolute w-full inset-x-0 2xl:px-[10%]">
          <ul>
            <li data-aos="fade-left">Software Development</li>
            <li data-aos="fade-left">Networking</li>
            <li data-aos="fade-left">Multimedia</li>
            <li data-aos="fade-left">IT support</li>
          </ul>
          <div className={styles.multImage}>
            <img src={service3} alt="service3" className="md:hidden xl:block" />
            <img src={service1} alt="service1" className="" />
            <img src={service2} alt="service2" className="hidden md:block" />
            <img src={service3} alt="service3" className="hidden md:block" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap rounded-[2rem] gap-3 px-[5%] md:flex-nowrap">
        <div className="md:max-w-[60%]">
          <div className="flex flex-wrap mt-8 gap-3 md:flex-nowrap md:mt-0">
            <CardCoding icon={code} />
            <CardNetworking icon={cable} />
          </div>
          <div className="w-full my-20" data-aos="fade-right">
            <DesignContent title="Design" image={computer} icon={Arrow2} />
            <DesignDescription icon={Arrow2} />
          </div>
        </div>
        <div className="max-w-[100%] md:h-0 md:max-w-[40%]">
          <div
            style={{ overflow: "hidden" }}
            className="max-w-full bg-white border border-gray-200 rounded-[2rem] shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative">
              <div className="w-full">
                <Swipper2 items={items} />
              </div>
              <div className="w-full px-3 py-10 absolute bottom-0 z-10 flex justify-between items-center rounded-[2rem] bg-[#363636C2]">
                <CardMultiMedia />
                <div className="flex">
                  <div className="w-[3rem] h-[3rem] rounded-full bg-black"></div>
                  <div className="w-[3rem] h-[3rem] -ml-3 rounded-full bg-[#171717]">
                    <img
                      className="w-full h-full p-3 rounded-full rotate-[-35deg]"
                      src={Arrow2}
                      alt="Arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[5%] mt-[4rem] text-center">
        <h2
          className="text-white text-3xl md:text-5xl font-bold"
          data-aos="fade-up">
          Supported By Humans
        </h2>
        <p className="text-white text-xl font-light mt-10" data-aos="flip-up">
          We put special emphasis on customer support. Our dedicated support
          team is waiting to assist you.
          <br /> We always try our level best to do so.
        </p>
      </div>
      {/* <ScrollTrigger onEnter={handleEnter} onExit={handleExit}> */}
      <div className="mx-[5%] mt-[4rem] grid mb-8 gap-4 rounded-lg shadow-sm md:mb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {
          /* counterOn && */ CounterDetail.map((item, index) => (
            <CardCounter key={index} {...item} />
          ))
        }
      </div>
      {/* </ScrollTrigger> */}

      <div className="mx-[5%] mt-[4rem] grid mb-8 gap-4 rounded-lg shadow-sm md:mb-12 grid-cols-1 sm:grid-cols-2">
        {BigCard.map((item, index) => (
          <CardBig key={index} {...item} />
        ))}
      </div>
    </section>
    </>
  );
};
