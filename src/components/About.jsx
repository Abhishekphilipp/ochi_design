import { motion } from "framer-motion";

const About = () => {
  return (
    <div  className='About w-full py-20 pl-5 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className="font-['Neue_Montreal'] leading none text-5xl px-20">Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        
        <div className=" w-full flex px-12 py-28 border-t-[1px] border-b-[1px] border-zinc-600 middle-part gap-32  mt-16 ">
            <div className=""> <h3>What can you expect</h3></div>
            <div className=""> <h3>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h3></div>
            <div> <h3>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h3></div>
            <div className="link flex-col"> <h3>Instagram</h3><h3>Linkedin</h3><h3>Facebook</h3><h3>Twitter</h3></div>
        </div>
        <div className="w-full flex px-16 pt-8">
        <div className="w-1/2 ">
        <h1 className="font-['Neue_Montreal'] leading none text-6xl ">Our approach</h1>
          <button className="font-['Neue_Montreal'] uppercase text-white bg-gray-800 rounded-full px-8 py-4 flex items-center justify-center gap-6 mt-7">Read More
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-red-500 rounded-2xl">
        <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                alt=""
              />
        </div>
        </div>
    </div>
  )
}

export default About