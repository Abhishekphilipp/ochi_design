import { motion } from "framer-motion";
import { GoArrowUp } from "react-icons/go";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className="w-full h-screen bg-#f1f1f1 pt-1">
      <div className="textstructure mt-48 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => (
          <div className="masker" key={index}> 
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div initial={{width:0}} animate={{width:"7.8vw"}} transition={{ease: [0.76,0,0.24, 1], duration:1}} className="mr-[-1.vw] w-[7.8vw] rounded-md h-[4.5vw] -top-[0vw] relative"><img className="rounded-lg" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"></img></motion.div>
              )}
              <h1 className="text-8xl leading-[5vw] text-[#212121] uppercase tracking-tighter font-bold ">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-400 mt-44 flex justify-between items-center py-3 px-20 gap-5">
        {["For public and private companies", "For the first pitch to IPO"].map((item, index) => (
          <p className="text-light font-light tracing-tight leading-none" key={index}>
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="py-1 px-2 border-[2px] font-light text-sm uppercase border-zinc-500 rounded-full">Start the project</div>
          <div className="w-5 h-5 border-zinc-500 border-[2px] rounded-full flex items-center justify-center" > <span className="rotate-[45deg]"><GoArrowUp /></span></div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
