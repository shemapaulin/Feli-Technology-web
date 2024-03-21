import styles from "../../Pages/achievements/achievements.module.scss"
import Multimedia from "../../assets/img/MUTIMEDIA.jpg";

export const MultimediaProd = () => {
    return (
        <div className={styles.flexImage}>
        <div>
          
          <h2
            className="text-white font-bold text-4xl leading-[4rem]"
            data-aos="fade-left">
            MULTIMEDIA
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
                <span className="font-bold text-1xl mr-4">89%</span>
                <span>International Standards</span>
              </p>
              <p className="text-white mb-4">
                <span className="font-bold text-1xl mr-4">42.5%</span>
                <span>Discount</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-left">
            <img className="h-[50rem]" src={Multimedia} alt="image hold" />
          </div>
        </div>
      </div>
      )
}

