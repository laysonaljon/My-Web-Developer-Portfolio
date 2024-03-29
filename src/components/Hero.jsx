import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { HeroCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#C7E8CA]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            I am <span className='text-[#52def2]'>Aljon Layson</span>
          </h1>
          <p className={`${styles.heroSubText} text-white`}>
            I'm <TypeAnimation sequence={['a Web Developer', 2000, 'an Educator', 2000, 'a Tech Enthusiast',2000]}
            speed={50} className="text-[#b200b0]" wrapper="span" repeat={Infinity} />
          </p>
        </div>
      </div>

      <HeroCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;