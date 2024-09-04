import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialXIcon from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkded from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black w-full text-[#BCBCBC] text-sm py-20 text-center">
      <div className="container w-full">
        <div className="inline-flex relative before:content-['']  before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute before:top-2 before:bottom-0">
          <Image className="relative" src={logo} alt="SaaS logo" height={40} />
        </div>
        <nav className="flex md:flex-row md:justify-center flex-col gap-6 mt-6">
          <a href="">About</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
          <a href="">Careers </a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialXIcon />
          <SocialInsta />
          <SocialLinkded />
          <SocialPin /> 
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 Our Company Include. All rights reserved</p>
      </div>
    </footer>
  );
};
