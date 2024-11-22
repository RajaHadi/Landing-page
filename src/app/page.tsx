import Image from "next/image";

export default function Home() {
  return (
    <>
    <nav className="bg-[#080C15] text-[#CD292A]"><h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans pt-2">RAJAs BURGER POINT</h1></nav>
      <div className="w-full bg-[#080C15] h-full ">
        <div className="flex flex-col flex-wrap md:flex-row justify-around  p-10 ">
          <div className="pl-10 w-6/12 h-auto flex flex-col justify-center  ">
          
            <h1 className="md:text-5xl text-3xl text-white pb-10 font-extrabold">
              Wake up your <br />
              taste buds with <br />
              this <p className="text-[#CD292A]"> juicy bite</p>
            </h1>
            <p className="mt-6 font-serif text-white">Freshly Made Juicy Burgers That Will Satisfy Your <br />Hunger Today</p>
            <button className="rounded-3xl mt-10 bg-[#CD292A] text-white w-40 py-2 p-3">Buy Now</button>

          </div>
          <div className="w-6/12 flex justify-center h-auto">
          <Image src={"/burger (1).png"} alt="burger" width={1000} height={1000}  className="w-[600px] h-[600px] pb-10"/> </div>
        </div>
      </div>
    </>
  );
}
