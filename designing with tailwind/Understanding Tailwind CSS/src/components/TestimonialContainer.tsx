import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface testimonialsProps {
  column: {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  }[];
  uiClass?: string;
}

const TestimonialContainer = ({ column, uiClass }: testimonialsProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
        uiClass && uiClass
      )}
    >
      {column.map(({ text, imageSrc, name, username }, index) => (
        <div className="card">
          <p>{text}</p>
          <div className="flex gap-3 mt-5 items-center">
            <Image src={imageSrc} alt={name} height={50} width={50} />
            <div>
              <h3 className="font-medium tracking-tight leading-5">{name}</h3>
              <p className="tracking-tight leading-5">{username}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialContainer;
