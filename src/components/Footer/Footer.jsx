import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/short-logo.png"
const Footer = () => {
  return (
    <footer className="bg-[#0F0D32] py-8 p-14"> 
    <div className="container mx-auto">
      <div className="text-center">
        <a className="text-[#d5d5d5] text-[1.2rem] py-0.5 px-1.5 border border-solid border-[#8c94b8] rounded my-0 mx-0.5 hover:text-[#8c94b8]" href="https://www.facebook.com/deshcareer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a className="text-[#d5d5d5] text-[1.2rem] py-0.5 px-1.5 border border-solid border-[#8c94b8] rounded my-0 mx-0.5 hover:text-[#8c94b8]" href="https://www.youtube.com/channel/UCQB33GJ0C3pL3IpxpVFQS2Q">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a className="text-[#d5d5d5] text-[1.2rem] py-0.5 px-1.5 border border-solid border-[#8c94b8] rounded my-0 mx-0.5 hover:text-[#8c94b8]" href="https://www.linkedin.com/company/deshcareer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <div className="flex flex-wrap mx-10 items-center">
            <div className="flex w-full flex-1 flex-col p-[0.8rem]">
                <div className="pb-2">
                    <a href=""> <img src={logo} alt="" className="w-[200px] text-[#8c94b8] leading-[2] hover:text-[#d5d5d5]"/></a>
                </div>
                <p className="text-[#8c94b8] mb-5">Desh Career is Career based newsletter in Bengali language. This newsletter has published weekly.&nbsp;This is published in every Saturday at 12.00 PM.&nbsp;</p>
            </div>
            <div className="flex w-full flex-1 flex-col p-[0.8rem] item-start md:items-center">
                    <h4 className="text-2xl text-[#d5d5d5] md:leading-[4]">Privacy And Terms</h4>
                    <a className="text-[#8c94b8] leading-[2] hover:text-[#d5d5d5]" href="">Privacy Policy</a>
                    <a className="text-[#8c94b8] leading-[2] hover:text-[#d5d5d5]" href="">Terms Condition</a>
                    <a className="text-[#8c94b8] leading-[2] hover:text-[#d5d5d5]" href="">FAQ</a>

            </div>
            <div className="flex w-full flex-1 flex-col p-[0.8rem] item-center md:items-end" >
                <h4 className="text-2xl text-[#d5d5d5] md:leading-[4] ">Support</h4>
                <a  className="text-[#8c94b8] leading-[2] hover:text-[#d5d5d5]" href="">Affiliate Link</a>
                <a  className="text-[#8c94b8] leading-[2]hover:text-[#d5d5d5]" href="">Contact us</a>
                <a className="text-[#8c94b8] leading-[2] hover:text-[#d5d5d5]" href="">Advertise with us</a>
            </div>

        </div>
    </div>
    <hr className="border border-solid border-[#8c94b8]"/>
    <div className="px-8 py-2">
        <div className="flex flex-wrap justify-between">
            <div className="text-[#d5d5d5] text-[0.8rem]">
                &copy; 2023 Newsletter E-mail Service: All Copy right reserved
            </div>
            <div>
                <a className="text-[#d5d5d5] text-[0.8rem] pr-2.5" href="#">Terms</a>
                <a className="text-[#d5d5d5] text-[0.8rem] pr-2.5" href="#">Cookie Policy</a>
                <a className="text-[#d5d5d5] text-[0.8rem] pr-2.5" href="#">Terms</a>
                <a className="text-[#d5d5d5] text-[0.8rem] pr-2.5" href="#">Privacy</a>
            </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
