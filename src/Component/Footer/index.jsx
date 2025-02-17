import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-[#0F172A] text-white px-10 py-8 mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div>
          <h1 className='text-xl font-semibold'>Get In Touch</h1>
          <ul className='mt-3 space-y-2 text-gray-300 text-sm'>
            <li>📍 123 Street, New York, USA</li>
            <li>📞 +012 345 67890</li>
            <li>📧 info@example.com</li>
          </ul>
          <div className='flex gap-3 mt-4'>
            <Link to={""} className='w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-[#14B8A6]'>
              <FaFacebook size={18} />
            </Link>
            <Link to={""} className='w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-[#14B8A6]'>
              <FaTwitter size={18} />
            </Link>
            <Link to={""} className='w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-[#14B8A6]'>
              <FaInstagram size={18} />
            </Link>
            <Link to={""} className='w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-[#14B8A6]'>
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>
        <div>
          <h1 className='text-xl font-semibold'>Quick Links</h1>
          <ul className='mt-3 space-y-2 text-gray-300 text-sm'>
            <li><Link to="" className='hover:text-[#14B8A6]'>About Us</Link></li>
            <li><Link to="" className='hover:text-[#14B8A6]'>Contact Us</Link></li>
            <li><Link to="" className='hover:text-[#14B8A6]'>Our Services</Link></li>
            <li><Link to="" className='hover:text-[#14B8A6]'>Privacy Policy</Link></li>
            <li><Link to="" className='hover:text-[#14B8A6]'>Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl font-semibold'>Photo Gallery</h1>
          <div className='mt-3 grid grid-cols-3 gap-2'>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className='w-14 h-14 rounded-sm border-2 border-white overflow-hidden'>
                <img src={`./img/property-${index + 1}.jpg`} alt={`Property ${index + 1}`} className='w-full h-full object-cover' />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className='text-xl font-semibold'>Newsletter</h1>
          <p className='mt-3 text-gray-300 text-sm'>Subscribe to our newsletter for the latest updates.</p>
          <div className=' mt-4 flex w-full'>
            <input type='email' placeholder='Your email' className='p-3 rounded-l-md w-[40%] text-black ' />
            <button className='bg-[#14B8A6] text-white px-4 rounded-r-md hover:bg-[#0f9b8a]'>Sign Up</button>
          </div>
        </div>

      </div>
      <div className="flex justify-between text-center text-gray-400 mt-10 text-sm">
        <p>
        © Your Site Name, All Right Reserved. Designed By HTML Codex
        </p> 
       
       <ul className='flex text-center gap-5  '>
        <li className='border-r border-gray-400 pr-2 '>Home</li>
        <li className='border-r border-gray-400 pr-2'>Cookies</li>
        <li className='border-r border-gray-400 pr-2'>Help</li>
        <li className=''>FAQs</li>
       </ul>
      
      </div>

    </div>
  );
};

export default Footer;
