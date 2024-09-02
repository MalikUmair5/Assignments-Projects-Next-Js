import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeimage from "@/assets/tube.png";
import productImage from "@/assets/product-image.png";

export const ProductShowcase = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className="section-title">A more effective to track Progress</h2>
          <p className="section-description">
            Effortlessly turn your Idea into fully functional responsive SaaS
            Website in just minutes with this tempelate
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product Image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="pyramid Image"
            className="absolute hidden md:block -right-36 -top-32"
            height={262}
          />
          <Image
            src={tubeimage}
            alt="Tube Image"
            className="absolute hidden md:block -left-36 -bottom-24"
            height={262}
          />
        </div>
      </div>
    </section>
  );
};
