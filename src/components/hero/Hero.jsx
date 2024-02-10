import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer z-10"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>TADIWOS ANEGAGREGN</motion.h2>
          <motion.h1 variants={textVariants}>
            Website developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons z-10">
            <motion.button className=" border border-y-white" variants={textVariants}>
             <a href="#Contact">
             Hire me
             </a> 
            </motion.button>
            <motion.button className=" bg-purple-600 " variants={textVariants}>
            <a href="/TadiwosAnegagregn.pdf.docx" download> Download CV </a> </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        React Node MongoDB 
      </motion.div>
      <div className="imageContainer flex justify-center">
        <img src="/hero1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
