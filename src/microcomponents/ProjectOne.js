import React from 'react'
// import Pacman_Image from '../images/pacman_image.png'

const ProjectOne = () => {
  return (
    <>
      <a href='https://hannahbodey.github.io/GA-Project-1-PacMan/' target='_blank' rel='noreferrer'>
        <div className='individual-project'>
          <h5 className='project-title'>PacMan</h5>
          <img className='project-logo' src={require('../images/pacman_image.png')} alt='pacman-screenshot' />
          <h6 className='project-info'>February 2023, 6 day solo project</h6>
          {/* <a href='https://hannahbodey.github.io/GA-Project-1-PacMan/'>Click here to play!</a> */}
          <p className='project-description'>Pseudocode and planning of the logic of the game. Gave all ghosts individual movement patterns and responses to proximity of PacMan character; player is able to move up levels, lose lives and gain points.</p>
        </div>
      </a>
    </>
  )
}

export default ProjectOne