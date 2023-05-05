import React from 'react'

const ProjectThree = () => {
  return (
    <>
      <a href='https://boot-track.herokuapp.com/' target='_blank' rel='noreferrer'>
        <div className='individual-project'>
          <h5 className='project-title'>BootTrack</h5>
          <img className='project-logo' src={require('../images/boottrack_image.png')} alt='boottrack-screenshot' />
          <h6 className='project-info'>March 2023, 8 day group project</h6>
          {/* <a href='https://boot-track.herokuapp.com/'>Click here to learn!</a> */}
          <p className='project-description'>Education tool to track bootcamp progress for students and instructors. Responsible for teacher functionality, student work uploads, authentication, theme consistency, home page slideshow.</p>
        </div>
      </a>
    </>
  )
}

export default ProjectThree