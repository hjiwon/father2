import MainTexts from "./components/MainTexts";
import Link from 'next/link'
import Image from 'next/image'
import Carousel from "./components/Carousel";

const Main = () => {
  return (
    <div className="h-fit">

      <Carousel images={['/banner.jpeg']} />
      <Link href='https://www.nhis.or.kr/static/alim/paper/oldpaper/202203/sub/01.html' className="bg-stone-800 h-60 w-60 mx-auto rounded-full font-bold text-white text-4xl flex items-center my-3 justify-center">
        <Image src="/main_circle.png" alt="" width={800} height={800}/>
      </Link>
      <MainTexts />

    </div>
  );
}

export default Main;