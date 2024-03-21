import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useRef } from "react";


export const ApplyForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (form.current) {
          emailjs
            .sendForm('service_ec47ozj', 'template_j6wqtj4', form.current,'Ri_HY3-lF61cYKx3K' )
            .then(
              (response: EmailJSResponseStatus) => {
                console.log('SUCCESS!', response.status, response.text);
                window.alert("Application sent successfully");
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
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50 mt-10">
      <form ref={form} onSubmit={sendEmail} className="container flex flex-col mx-auto space-y-12">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Personal Information</p>
            <p className="text-xs">
              If you want to boost with your career with the professional Internership , we can help you ! just apply 
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname"  className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                name="from_Fname"
                placeholder="First name"
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                name="from_Lname"
                placeholder="Last name"
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="Email"
                placeholder="Email"
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Phone Number
              </label>
              <input
                id="email"
                type="number"
                name="from_Pnumber"
                placeholder="Phone Number"
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                name="from_Country"
                placeholder=""
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                id="city"
                type="text"
                name="from_City"
                placeholder=""
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                State / Province
              </label>
              <input
                id="state"
                type="text"
                placeholder=""
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                id="zip"
                type="text"
                placeholder=""
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Academic Information
              </label>
              <input
                
                name="from_Academic"
                placeholder="School / degree"
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Current Bootcamp/Training
              </label>
              <input
              
                name="from_bootcamp"
                className="block w-full h-10 rounded-md shadow-sm focus:ring pl-4 dark:bg-gray-800 border-[5px] border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="self-center  px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
