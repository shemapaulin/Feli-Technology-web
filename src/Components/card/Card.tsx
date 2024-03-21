import {
  Item,
  Comments,
  SubItemLabel,
  DesignItem,
  DesignItemDescription,
  Services,
  Counter,
  Support,
} from "@/modal/index";
import * as React from "react";
import CountUp from "react-countup";

export const Card: React.FC<Item> = ({ title, label, items }) => {
  return (
    <div className="">
      <div className="text-white text-xl font-medium my-10">{title}</div>
      <div className="block max-w-full p-6 border bg-gray-800 border-gray-700 hover:bg-gray-700 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {label}
        </h5>
        <ul className="list-disc">
          {items.map((item, index) => (
            <li key={index} className="font-normal text-gray-400 mb-2">
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const CardCustomer: React.FC<Comments> = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-gray-800 border-gray-700 rounded-lg md:rounded-br-lg">
      <div className="w-full flex justify-between flow-wrap md:flex-nowrap">
        <div className="flex items-center mb-4 space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src="/docs/images/people/profile-picture-5.jpg"
            alt=""
          />
          <div className="space-y-1 font-medium dark:text-white">
            <p>
              Jese Leos{" "}
              <time
                dateTime="2014-08-16 19:00"
                className="block text-sm text-gray-500 dark:text-gray-400"
              >
                Joined on August 2014
              </time>
            </p>
          </div>
        </div>
        <div className="flex items-center mb-1">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-300 dark:text-gray-500 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
            Thinking to buy another one!
          </h3>
        </div>
      </div>
      <div>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
          Need a help in Claim?
        </h5>
      </div>
      <p className="mb-3 font-normal text-gray-400">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
      </p>
      <div className="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        <svg
          className="w-3 h-3 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </div>
    </div>
  );
};

export const CardService: React.FC<Services> = ({
  title,
  description,
  bg,
  icon,
}: Services) => {
  return (
     
      <div
    className="flex flex-col items-center justify-center p-8 py-[3rem] text-center bg-gray-800 z-10"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the last value (0.5) for opacity
    }}
    data-aos="fade-up"
  >
     <img className="w-10 h-10 text-gray-400 mb-3" src={icon} alt={title} />
   
   
    <div>
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">{title}</h5>
    </div>
    <p className="mb-3 font-normal text-gray-200">{description}</p>
  </div>
    
  

    
  );
};

export const CardBig: React.FC<Support> = ({
  title,
  description,
  icon,
  label,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-8 py-[5rem] text-center bg-gray-800 border-gray-700 rounded-lg md:rounded-br-lg"
      data-aos="fade-up"
    >
      <img className="w-[4rem] h-[4rem] text-gray-400 mb-3" src={icon} />
      <div>
        <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-white">
          {title}
        </h5>
      </div>
      <p className="mt-3 mb-3 font-normal text-gray-400">{description}</p>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        {label}
      </button>
    </div>
  );
};

export const CardCounter: React.FC<Counter> = ({ count, label }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-8 py-10 md:py-20 text-center bg-gray-800 border-gray-700 rounded-lg md:rounded-br-lg"
      data-aos="fade-up"
    >
      <div>
        <h5 className="mb-2 text-6xl font-semibold tracking-tight text-white text-center">
          <CountUp start={0} end={count} duration={2} delay={0} />
        </h5>
      </div>
      <p className="mb-3 font-normal text-gray-400">{label}</p>
    </div>
  );
};

export const CardSmall: React.FC<SubItemLabel> = ({
  sub_value_1,
  sub_value_2,
}) => {
  return (
    <div className="flex flex-wrap justify-between mt-4 md:mt-0">
      <div className="flex w-[8rem] rounded-full text-white border border-white bg-black px-2  justify-between items-center">
        <div className="w-[2rem] h-[2rem] rounded-full bg-white"></div>
        {sub_value_1}
      </div>
      <div className="flex w-[8rem] rounded-full text-white border border-white px-2  justify-between items-center">
        <div className="w-[2rem] h-[2rem] rounded-full bg-red-300"></div>
        {sub_value_2}
      </div>
    </div>
  );
};

export const DesignContent: React.FC<DesignItem> = ({ title, image, icon }) => {
  return (
    <div className="flex justify-between items-center md:justify-start md:mt-5">
      <h2 className="text-white text-6xl font-extrabold" data-aos="fade-left">
        {title}
      </h2>
      <div className="flex md:ml-[20%]">
        <div
          className="w-[3rem] h-[3rem] rounded-full bg-black"
          data-aos="fade-left"
        ></div>
        <div
          className="w-[3rem] h-[3rem] -ml-3 rounded-full bg-white"
          data-aos="fade-down"
        >
          <img className="w-full h-full rounded-full" src={image} alt="Arrow" />
        </div>
        <div
          className="w-[3rem] h-[3rem] -ml-3 rounded-full bg-[#0D0D0D]"
          data-aos="fade-right"
        >
          <img
            className="w-full h-full p-3 rounded-full"
            src={icon}
            alt="Arrow"
          />
        </div>
      </div>
    </div>
  );
};

export const DesignDescription: React.FC<DesignItemDescription> = ({
  icon,
}) => {
  return (
    <div className="flex justify-between flex-wrap md:mt-4">
      <div className="md:w-[50%]" data-aos="fade-left">
        <h3 className="text-white text-4xl font-light">For your customer</h3>
        <p className="mt-3 text-white text-xl font-light">
          FELI Technology Investment Group, an esteemed organization founded by
          a visionary individual with a mission to seize abundant business
          prospects available <span className="font-extrabold"> worldwide</span>
        </p>
      </div>
      <div className="flex md:justify-start mt-6 md:w-[80%]">
        <button
          className="bg-white px-10 h-[3rem] rounded-full"
          data-aos="fade-left"
        >
          Start now
        </button>
        <a href="/prod">
          <div
            className="w-[3rem] h-[3rem] rounded-full bg-[#0D0D0D]"
            data-aos="fade-right"
          >
            <img
              className="w-full h-full p-3 rounded-full"
              src={icon}
              alt="Arrow"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export const CardMultiMedia = () => {
  return (
    <div className="w-1/2 flex justify-evenly items-center md:flex-wrap">
      <h4 className="text-white">
        <span className="text-2xl font-bold mr-1">03</span>
        <span className="text-xl">multimedia</span>
      </h4>
      <div className="bg-white w-[2px] h-[30px]"></div>
      <div>
        <h3 className="text-white ">Explore</h3>
        <hr />
      </div>
    </div>
  );
};

export const CardNetworking: React.FC<DesignItemDescription> = ({ icon }) => {
  return (
    <div className="md:w-[60%]" data-aos="fade-down">
      <div className="border border-white-200 shadow rounded-[2rem] dark:bg-white-800 dark:border-white-700">
        <img className="rounded-[2rem]" src={icon} alt="" />
      </div>
      <hr className="my-6 w-[60%]" />
      <div>
        <h2 className="text-white">
          <span className="text-[22px] font-bold">02</span> Networking
        </h2>
      </div>
    </div>
  );
};

export const CardCoding: React.FC<DesignItemDescription> = ({ icon }) => {
  return (
    <div className="md:w-[40%]" data-aos="fade-up">
      <div className="">
        <div className="border border-white-200 shadow rounded-[2rem] dark:bg-white-800 dark:border-white-700">
          <img className="rounded-[2rem]" src={icon} alt="" />
        </div>
        <hr className="my-6 w-[40%]" />
        <div>
          <h2 className="text-white">
            <span className="text-[22px] font-bold">01</span> Coding
          </h2>
        </div>
      </div>
    </div>
  );
};
