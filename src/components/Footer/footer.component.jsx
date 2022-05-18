import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { ImMail4 } from "react-icons/im";
import { BsFacebook, BsSearch } from "react-icons/bs";
const FooterSm = () => {};
const FooterMd = () => {
  return (
    <>
      <div className="grid w-full">
        <div className="row-container flex h-80 bg-footercolor-800 text-white w-full mt-12 ">
          <div className="flex flex-nowrap  w-full h-full mt-6  justify-evenly text-lg">
            <div className=" column  font-semibold ">
              Browser
              <div className="column font-light">By Search</div>
              <div className="column font-light">By map</div>
              <div className="column font-light">By Resources</div>
            </div>
            <div className=" column font-semibold">
              About the University
              <div className="column font-light">Address</div>
            </div>
            <div className="column font-semibold">
              Events
              <div className="column font-light ">
                Webinar : Standing up to Harrasement
              </div>
              <div className="column font-light ">
                2Nd National Workshop On Research Methodology And Statistical
                Tools{" "}
              </div>
            </div>
            <div className=" column font-semibold box-border float-left">
              Contact
              <div className="column font-light">alumni@pup.org</div>
            </div>
          </div>
        </div>
        
        <div className="row-container flex items-center flex-nowrap w-full h-20 justify-around">
          <div className="ml-5">
            <div className="column font-semibold text-lg font-sans ">
              Punjabi University Patiala-147002
            </div>
            <div className="column ">Email: dean.alumnirelations@gmail.com</div>
            <div className="column "></div>
          </div>
          <div  className="flex items-center gap-x-1.5 ">
            <a href="https://www.facebook.com/PbiUniPatiala/" target="_blank"> <BsFacebook className="h-8 w-8" /> </a>
            
            <div> <a href="https://twitter.com/PbiUniPatiala" target="_blank"><AiFillTwitterCircle  className="h-8 w-8"/> </a></div>
            <div><a href="https://www.linkedin.com/school/punjabi-university/" target="_blank"><AiFillLinkedin className= "rounded-full h-8 w-8" /></a> </div>
            <div> <a href="https://www.youtube.com/channel/UCNcQ6i3bbUuoZ1pjdZL1Qow/featured" target="_blank"><TiSocialYoutubeCircular className="h-8 w-8" /></a></div>
            <div> <ImMail4 className="h-8 w-8"/> </div>
        </div>
          <div className="column mt-3 italic">
            {" "}
            © 2022 Copyright Alumni Association| All Rights Reserved{" "}
          </div>
        </div>
      </div>
    </>
  );
};
const Footer = () => {
  return (
    <div className="hidden md:flex lg:flex">
      <FooterMd />
    </div>
  );
};
export default Footer;
