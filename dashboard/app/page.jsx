import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link'; 
import Image from 'next/image'; 
import Register from './ui/dashboard/register/register';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-20 shrink-0 items-end bg-[#343A40] p-4 md:h-52">
      <Link href='https://bastonprojectmanagement.com' >
      <Image
          width={200}
          height={76}
          alt="logo"
          src={'/aston_white-trans.png'}
          priority
        />
      </Link>
      
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <Image
          width={200}
          height={200}
          alt="logo mobile v"
          src={'/welcome.svg'}
          className='self-center'
          priority
        />
        <p
            className={"text-xl text-gray-800 md:text-3xl md:leading-normal"}
          >
          <strong>Welcome to Baston Project Managment System.</strong> This is the
            place where you can manage your investment portfolio. <br />
            <Link href="https://bastonprojectmanagement.com" className="text-[#FF4300] hover:text-[#f77245] ">
              Go Back to Home.
            </Link>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-[#ff4300] px-6 py-3 text-md font-medium text-white transition-colors hover:bg-[#f87a4d] md:text-base"
          >
            <span>Log in</span> <AiOutlineArrowRight className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex w-1 items-center justify-center m-1 p-1 md:w-1/2 md:px-2 md:py-12">
          <Register />
        </div>
      </div>
    </main>
  );
}