import * as motion from "motion/react-client";
import { clipPath, variants } from "./utils";

type Props = {
  imgElement: () => React.JSX.Element;
  title: string;
  description: string;
  splashBackground: string;
  textColor?: string;
  cardBackground: string;
};

export function Card({
  imgElement: ImgElement,
  splashBackground,
  title,
  description,
  cardBackground,
  textColor,
}: Props) {
  return (
    <motion.div
      className="flex relative pt-[1.25rem] w-full card-sm:w-[31.3rem] overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.4 }}
    >
      <div
        style={{ clipPath, background: splashBackground }}
        className="absolute top-0 left-0 right-0 bottom-0"
      />
      <motion.div
        style={{ background: cardBackground }}
        variants={variants}
        className="mx-auto text-[10.25rem] w-[18.75rem] h-[26.8rem] rounded-[1.25rem] origin-[10%_60%] shadow-project-card flex flex-col"
      >
        <div className="w-full h-40 rounded-t-[1.25rem] overflow-hidden">
          <ImgElement />
        </div>

        <div className="flex flex-col gap-4 p-4 flex-1">
          <h4
            className={`${
              textColor ? `text-[${textColor}]` : "text-black"
            } text-xl font-semibold text-center`}
          >
            {title}
          </h4>
          <p
            className={`${
              textColor ? `text-[${textColor}]` : "text-black"
            } text-base text-center`}
          >
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
