import Image from "next/image";

const Photozone = () => {
  return (
    <div className="">

      <div className="flex flex-col items-center">
        <Image className="w-full" src="/picture7.jpeg" alt="" width={1100} height={1100}/>
        <Image className="w-full" src="/picture1.jpeg" alt="" width={1100} height={1100}/>
        <Image className="w-full" src="/picture2.jpeg" alt="" width={1100} height={1100}/>
        <Image className="w-full" src="/picture3.jpeg" alt="" width={1100} height={1100}/>
        <Image className="w-full" src="/picture4.jpeg" alt="" width={1100} height={1100}/>
        <Image className="w-full" src="/picture5.jpeg" alt="" width={1100} height={1100}/>
        <Image className="w-full" src="/picture6.jpeg" alt="" width={1100} height={1100}/>
      </div>

    </div>
  );
}

export default Photozone;