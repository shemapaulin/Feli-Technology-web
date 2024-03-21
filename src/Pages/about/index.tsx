import styles from "./about.module.scss";
import image1 from "../../assets/img/project_1.png";
import people from "../../assets/img/people.png";
import idea from "../../assets/img/idea.png";
import focus from "../../assets/img/focus.png";
import Heart from "../../assets/img/Heart.png";
import Strength from "../../assets/img/Strength.png";
import Arrow from "../../assets/img/Arrow.svg";
import Chain3 from "../../assets/img/inner-hero.jpg";
import Africa from "../../assets/img/bg-stars-1.webp";
import { ScrollTo } from "@/layouts/ScrollTop";
import AnimatedCircle from "@/Components/animatedCircle.tsx/animatedCircle";

export const About = () => {
  const videoURL = "https://felitechnology.com/HILLWOOD%20Advert.mp4";
  return (
    <>
    <ScrollTo />
    <section className={styles.about_page}>
      <div
        className={
          `${styles.background_image}` +
          " min-h-screen flex items-center justify-center"
        }>
        <img className="object-cover h-full w-full" src={Chain3} alt="" />
      </div>
      <div
        className={
          `${styles.background_image}` +
          " -left-[20rem] min-h-screen flex items-center justify-center mt-[270rem] md:mt-[120rem]"
        }>
        <img
          className="h-full w-full -z-1"
          src={Africa}
          data-aos="fade-down"
          alt=""
        />
      </div>
      <div className="mx-[5%] mt-[0rem] text-center">
        <h2
          className="px-0 md:px-[20%] text-white text-3xl md:text-5xl font-bold"
          data-aos="fade-up">
          FELI TECHNOLOGY INVESTMENT GROUP
        </h2>
        <p
          className="text-white text-xl font-light mt-10 md:px-[10rem]"
          data-aos="flip-up">
          At FELI Technology Investment Group, we have the expertise to turn
          your dream into reality through innovative solutions and dedicated
          efforts.
        </p>
      </div>
      <div className="mx-[5%] mt-[25rem] text-center">
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
        className={`${styles.image_hold}` + " flex justify-center mt-[10rem]"}
        data-aos="fade-left">
        <video
          className="w-full md:w-[70%] rounded-lg"
          src={videoURL}
          autoPlay
          loop
          muted></video>
      </div>
    <AnimatedCircle/>
      <div className={styles.teamContent}>
        <div className={styles.title} data-aos="fade-right">
          <p>We Stand For</p>
        </div>
        <div className={styles.team} data-aos="zoom-in-down">
          <div className={styles.discription} data-aos="fade-up-left">
            <img src={people} alt="" />
            <div className={styles.text}>
              <h3>Teamwork</h3>
              <p>we value people that empower team-members to grow.</p>
            </div>
          </div>
          <div className={styles.discription} data-aos="fade-up-left">
            <img src={idea} alt="" />
            <div className={styles.text}>
              <h3>Innovation</h3>
              <p>
                we trust everyone to be able to identify major improvement
                opportunities.
              </p>
            </div>
          </div>
          <div className={styles.discription} data-aos="fade-up-left">
            <img src={focus} alt="" />
            <div className={styles.text}>
              <h3>Impact</h3>
              <p>
                we promote a sustainable and healthy mentality with positive
                team spirt and constant communication.
              </p>
            </div>
          </div>
          <div className={styles.discription} data-aos="fade-up-left">
            <img src={Heart} alt="" />
            <div className={styles.text}>
              <h3>Freedom</h3>
              <p>
                As a team, we manage all responsibilities with total
                independence & maximum accountability. In exchange we promote
                freedom to decide how,when, why.
              </p>
            </div>
          </div>
          <div className={styles.discription} data-aos="fade-up-left">
            <img src={Strength} alt="" />
            <div className={styles.text}>
              <h3>Resilience</h3>
              <p>
                Make no mistake , we have a bumpy road ahead of Us: ability to
                be persistent, along with constant improvement and growth
                mentality is highly promote.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.journey}>
        <div className={styles.title} data-aos="fade-left">
          <p>Our Milestones</p>
        </div>
        <div className={styles.scale}>
          <div className={styles.item}>
            <div className={styles.Year}>
              <h5 data-aos="flip-right">
                Milestones for TechSolutions Inc. - Year 2023:
              </h5>
            </div>
            <div className={styles.discription} data-aos="fade-up">
              <p>
                TechSolutions Inc. sets its sights on significant growth and
                development in the year 2023. The company aims to expand its
                client portfolio by reaching out to diverse industries and
                leveraging its reputation and targeted marketing strategies.
                Alongside client acquisition, TechSolutions Inc. invests
                resources in research and development to create an innovative
                software product tailored to a specific niche market segment.
                Simultaneously, the company actively seeks strategic
                partnerships with major technology providers or industry leaders
                to enhance its capabilities and market reach. Employee
                development remains a priority, with regular training sessions
                and certifications to keep the team competent and up-to-date
                with industry trends. To meet the increasing demand for
                networking solutions, TechSolutions Inc. initiates the expansion
                of its networking department by recruiting experienced
                professionals.
              </p>
            </div>
            <img
              className="mt-10"
              src={image1}
              alt="Image Hold"
              data-aos="zoom-in-down"
            />
          </div>
          <div className={styles.item}>
            <div className={styles.Year}>
              <h5 data-aos="flip-right">
                Milestones for TechSolutions Inc. - Year 2024:
              </h5>
            </div>
            <div className={styles.discription} data-aos="fade-up">
              <p>
                Building upon the foundations laid in the previous year,
                TechSolutions Inc. looks forward to achieving several
                significant milestones in 2024. The company is geared up for the
                official launch of the previously developed software product,
                which underwent rigorous research and development. To
                demonstrate its creative expertise, TechSolutions Inc.
                undertakes a high-profile multimedia project for a well-known
                client or industry event, aiming to attract more similar
                projects in the future. Additionally, the company actively seeks
                recognition as a trusted IT consultancy partner, showcasing its
                successful projects and garnering positive testimonials from
                satisfied clients. Contributing to the local tech community,
                TechSolutions Inc. engages in workshops, seminars, or webinars
                to share knowledge and establish itself as a thought leader in
                the industry. In pursuit of sustainable growth, the company
                targets a 20% increase in overall revenue, driven by successful
                product launches, service expansion, and increased client
                acquisition. Furthermore, employee satisfaction and engagement
                remain at the forefront, creating a positive
              </p>
            </div>
            <img
              className="mt-10"
              src={image1}
              alt="Image Hold"
              data-aos="zoom-in-left"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
