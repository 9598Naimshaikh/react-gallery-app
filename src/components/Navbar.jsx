import { Camera, Linkedin } from 'lucide-react';

export default function Navbar() {
    return <>
        <header className="w-full py-2 px-4 lg:px-10 border-b-2 border-zinc-700 flex items-center justify-between">
            <a href="#" className="font-bold text-2xl flex items-center justify-center gap-2">
                <Camera className='text-blue-500' />
                <span className=''>PicsHub</span>
            </a>

            <nav className='flex items-center justify-center gap-4'>
                <a href='https://www.linkedin.com/in/naeem-shaikh-9032b5289/' target='_blank' className="bg-blue-500 p-2 rounded-full active:scale-90 hover:scale-110 duration-200 transition-all">
                    <Linkedin />
                </a>
                <div className="">
                    <button className="bg-blue-500 px-3 py-1 rounded-full font-medium tracking-wide hover:scale-110 duration-200 transition-all active:scale-90">Login</button>
                </div>
            </nav>
        </header>
    </>
}