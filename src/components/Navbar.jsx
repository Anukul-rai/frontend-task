import { Link } from 'react-router-dom';


function Navbar() {

    return (
    <div className=' top-0 left-0 w-full z-10'>
        <div className=' mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-black/50 w-full '>
            <ul className=' flex md:flex gap-7 text-white sm:mx-4 sm:gap-7'>
                <Link to="/" className='cursor-pointer hover:text-gray-700 '>Testimonials</Link>
                <Link to="/feature" className='cursor-pointer hover:text-gray-700'>Features</Link>
                <Link to="/stats" className='cursor-pointer hover:text-gray-700'>Stats</Link>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar