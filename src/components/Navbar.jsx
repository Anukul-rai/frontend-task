import { Link } from 'react-router-dom';


function Navbar() {

    return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className=' mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-black w-full '>
            <ul className=' flex md:flex gap-7 text-white sm:mx-4 sm:gap-7'>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Features</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>Stats</a>
            </ul>
        <Link to="/sign-up">
            <button className='hidden md:block sm:pr-8 bg-amber-100 px-8 py-2 rounded-full cursor-pointer'>Sign up</button>
        </Link>
        </div>
        
    </div>
  )
}

export default Navbar