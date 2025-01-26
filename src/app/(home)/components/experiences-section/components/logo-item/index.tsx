import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  title: string;
  delay: number;
  imgElement: () => React.JSX.Element;
};

export function LogoItem({ imgElement: ImgElement, title, delay }: Props) {
  const ref = useRef(null);
  const isInview = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("visible");
    }

    if (!isInview) {
      controls.start("hidden");
    }
  }, [controls, isInview]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, translateY: 90 },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.1,
        damping: 20,
        delay,
        stiffness: 500,
      }}
      className="flex items-center flex-col gap-2"
    >
      {<ImgElement />}

      <h4 className="text-lg font-medium">{title}</h4>
    </motion.div>
  );
}
