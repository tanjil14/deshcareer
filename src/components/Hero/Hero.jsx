/* eslint-disable react/no-unescaped-entities */
import {
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = () => {
  return (
    <section>
      <div className="mx-4 sm:mx-8 md:mx-12 py-4">
        <div className="w-full md:w-8/12 lg:w-8/12 xl:w-7/12">
          <h1 className="text-[3.2rem] text-[#192733] font-bold leading-[1.2] py-2">Get Smarter about your career </h1>
          <p className="py-4">
            Get the <strong> 5-minute newsletter</strong> keeping about smart
            career{" "}
          </p>
          <div className="">
            <form>
              <div className="input-area">
                <span className=" w-[10%] my-0 mx-auto pt-5 px-2.5 pb-2.5">
                <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  type="email"
                  name="email"
                  className="w-[60%] border-none p-2.5"
                  placeholder="Your E-mail address"
                  required
                />
                <button className="h-11 w-[27%] m-2.5 border-none bg-[#dc3545] text-white rounded" type="submit">Join Free</button>
              </div>
            </form>

            <p className="mt-8 leading-[2]">
              <span>
                We're committed to your privacy. DashCareer uses the information
                you provide to contact you about our relevant content and
                services. You may unsubscribe from these communications at any
                time. For more information, check out our Privacy Policy.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
