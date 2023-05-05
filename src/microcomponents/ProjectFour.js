import React from 'react'

const ProjectFour = () => {
  return (
    <>
      <a href='https://theatre-addict.herokuapp.com/' target='_blank' rel='noreferrer'>
        <div className='individual-project'>
          <h5 className='project-title'>Theatre Addict</h5>
          <img className='project-logo' src={require('../images/theatre_addict_image.png')} alt='theatre-addict-screenshot' />
          <h6 className='project-info'>April 2023, 8 day solo project</h6>
          {/* <a href='https://theatre-addict.herokuapp.com/'>Click here to find your next show!</a> */}
          <p className='project-description'>Search tool for musical theatre in London - user able to swipe through shows and follow links to buy tickets, add comments / tips for individual shows. Authentication and monitoring the logged in user to change what’s shown and ability to send messages to other users.</p>
        </div>
      </a>
    </>
  )
}

export default ProjectFour