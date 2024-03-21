import Istock from "../../assets/img/Istock.jpg";
import iSida from "../../assets/img/iSida.jpg";
import dateimg from "../../assets/img/dateimg.jpg";
export const Prod = () => {
  return (
    <>
      <section className=" dark:text-gray-100 " data-aos="fade-up">
        {/** grids */}
        <div className=" mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ml-5 mr-5 justify-center mt-10">
          <div
            data-aos="fade-up"
            className="relative flex items-center max-w-[500px] justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]"
          >
            <img
              src={Istock}
              alt="/"
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                Feli E-commerce
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                The International Online Market
              </p>
              <a href="https://e-commerce-frontend-pi-seven.vercel.app/">
                <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                  Open The Site...
                </p>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]"
          >
            <img
              src={dateimg}
              alt="/"
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                LINKAH
              </h3>
              <p className="pb-4 pt-2 text-white text-center">Dating Site</p>
              <a href="/">
                <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                  Open The Site...
                </p>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]"
          >
            <img
              src={iSida}
              alt="/"
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                Therapista
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                The Mental Health Platform
              </p>
              <a href="/">
                <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
                  Open The Site...
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center  md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">
            Lounched
            <span className="dark:text-violet-400">Products </span>On the Market
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
          </p>
        </div>
      </section>
    </>
  );
};
