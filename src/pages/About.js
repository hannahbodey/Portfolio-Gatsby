import React from 'react'
import AdditionalCertificates from '../microcomponents/AdditionalCertificates'
import CodingLanguages from '../microcomponents/CodingLanguages'
import Education from '../microcomponents/Education'
import Interests from '../microcomponents/Interests'
import Languages from '../microcomponents/Languages'
import PersonalIntro from '../microcomponents/PersonalIntro'
import WorkExperience from '../microcomponents/WorkExperience'
// import { StaticImage } from 'gatsby-plugin-image'

const About = () => {
  return (
    <div className='site-wrapper'>
      <div className='title-container'>
        <img className='headshot' src={require('../images/headshot.jpeg')} alt='headshot' />
        <div className='title-pic-container'>
          <h1>Hannah Bodey</h1>
          <h2>Junior Software Engineer</h2>
        </div>
      </div>
      <div className='bio-container'>
        <PersonalIntro />
      </div>
      <h4 className='coding-languages-title'>Coding Languages</h4>
      <div className='skills-container'>
        <CodingLanguages />
      </div>
      <h4 className='coding-languages-title'>Human Languages</h4>
      <div className='skills-container'>
        <Languages />
      </div>
      <div className='work-education-experience'>
        <WorkExperience />
      </div>
      <div className='work-education-experience'>
        <Education />
      </div>
      <div className='additional-skills-container'>
        <AdditionalCertificates />
      </div>
      <div className='personal-interests-container'>
        <Interests />
      </div>
    </div>

  )
}

export default About