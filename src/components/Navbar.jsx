import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-stone-800 h-28 flex items-center pl-5 w-screen text-2.5xl">
      <ol className="flex gap-4 items-center text-stone-200">
        <Link href='/' className="hover:underline hover:underline-offset-8">홈</Link>
        <Link href='/business' className="hover:underline hover:underline-offset-8">사업안내</Link>
        <Link href='/company' className="hover:underline hover:underline-offset-8">인사말</Link>
        <Link href='/notion' className="hover:underline hover:underline-offset-8">대내외 활동</Link>
        <Link href='/photozone' className="hover:underline hover:underline-offset-8">포토존</Link>
        <Link href='/health' className="hover:underline hover:underline-offset-8">정보방</Link>
        {/* <Link to='/come' className="hover:underline hover:underline-offset-8">찾아오시는 길</ Link> */}
      </ol>
    </div>
  )
}

export default Navbar;