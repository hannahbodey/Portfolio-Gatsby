import React from 'react'

const Footer = () => {
  return (
    <div className='site-footer'>
      <a href='https://github.com/hannahbodey' target='_blank' rel='noreferrer'>
        <div className='github'>
          <img className='footer-logo' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github-logo'/>
          <p className='footer-text'>© Hannah Bodey 2023</p>
        </div>
      </a>
      <a href='https://www.linkedin.com/in/hannah-bodey/' target='_blank' rel='noreferrer'>
        <img className='footer-logo' src='https://cdn-icons-png.flaticon.com/512/61/61109.png' alt='linkedin-logo'/>
      </a>
    </div>
  )
}

export default Footer