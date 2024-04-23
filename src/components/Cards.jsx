const Cards = () => {
  return (
    <div className='bg-#f1f1f1 w-full h-screen px-20 flex items-center gap-5'>
  <div className="cardcontainer w-1/2 h-96">
    <div className=" flex items-center justify-center card w-full h-full bg-[#004D43] rounded-2xl">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
    </div>
  </div>
  <div className="cardcontainer flex gap-5 w-1/2 h-96">
  <div className="flex items-center justify-center card w-1/2 h-full bg-[#192826] rounded-2xl">
  <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
  </div>
  <div className="flex  items-center justify-center card w-1/2 h-full bg-[#192826] rounded-2xl">
  <img className="mix-blend-multiply" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>

  </div>
  </div>
    </div>
  )
}

export default Cards