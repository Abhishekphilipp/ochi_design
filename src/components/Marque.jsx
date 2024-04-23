import { motion } from 'framer-motion'

const Marque = () => {
  return (
    <div data-scroll data-scroll-speed=".04" className='w-full py-12  bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className="text text-white border-t-[1px] border-b-[1px] border-zinc-500 flex  overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x : 0}} animate={{ x: '-100%' }} transition={{ease: "linear", repeat: Infinity, duration: 8}} className="text-[18vw] tracking-tight leading-none -mt-10 font-bold pr-10 font-['Founders Grotesk X_Condensed']">WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x : 0}} animate={{ x: '-100%' }} transition={{ease: "linear", repeat: Infinity, duration: 8}} className="text-[18vw] tracking-tight leading-none -mt-10 font-bold pr-10 font-['Founders Grotesk X_Condensed']">WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marque