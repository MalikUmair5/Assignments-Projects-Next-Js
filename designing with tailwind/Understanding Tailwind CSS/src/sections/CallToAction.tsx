import ArrowRight from "../assets/arrow-right.svg";
import starImage from "../assets/star.png";
import springImage from "../assets/spring.png";
import Image from "next/image";
import { spring } from "framer-motion";
export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-#[D2CDFF] py-24">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">SiFgn up for free today</h2>
          <p className="section-description mt-5">
            Celeberate thy joy of accomplishment with an app designed to Track
            your progress and motivate your efforts
          </p>
          <Image
            src={starImage}
            alt="star Image"
            width={360}
            className=" absolute -left-[350px] -top-[137px] hidden md:block overflow-x-clip"
          />
          <Image
            src={springImage}
            alt="Spring Image"
            width={360}
            className=" absolute -right-[331px] -top-[19px] hidden md:block overflow-x-clip"
          />
        </div>
        <div className="flex gap-2 justify-center mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-secondary flex items-center">
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
