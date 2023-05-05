import React from 'react'

const ProjectTwo = () => {
  return (
    <>
      <a href='https://schoolmedicaldictionary.netlify.app/' target='_blank' rel='noreferrer'>
        <div className='individual-project'>
          <h5 className='project-title'>Merriam-Webster Dictionary App</h5>
          <img className='project-logo' src={require('../images/dictionary_app_image.png')} alt='dictionary-app-screenshot' />
          <h6 className='project-info'>March 2023, 2 day pair project</h6>
          {/* <a href='https://schoolmedicaldictionary.netlify.app/'>Click here to learn!</a> */}
          <p className='project-description'>App that returns words searched, definitions, pronunciation, related words, images (if available), and audio to demonstrate pronunciation. Responsible for nav bar, home page (with random word generator), functionality of medical dictionary, theme consistency.</p>
        </div>
      </a>
    </>
  )
}

export default ProjectTwo