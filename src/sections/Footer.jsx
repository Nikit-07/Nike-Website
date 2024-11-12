import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container' >
      <div className='flex justify-between items-start flex-wrap max-lg:flex-col gap-20'>
        <div className='flex flex-col items-start' >
          <a href="/">
            <img src={footerLogo} alt="footer logo" height={46} width={150} />
          </a>
          <p className='text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div key={icon.alt} className='bg-white flex items-center justify-center rounded-full h-12 w-12' >
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 flex-wrap justify-between gap-20 lg:gap-10'>

          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white text-2xl font-medium font-montserrat leading-normal mb-6' >{section.title}</h4>

              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className='text-white-400 font-montserrat text-base mt-3 cursor-pointer hover:text-slate-gray'>
                    <a href="/"> {link.name} </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>

        <div className='flex justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt="copyright sign" height={20} width={20} className='m-0 rounded-full'/>
          <p>Copyright. All rights reserved.</p>
        </div>

        <div>
          <p className='font-montserrat cursor-pointer' >Terms & Conditions</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer
