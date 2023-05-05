import React from 'react'
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <>
      <h3 className='experience-title'>Education</h3>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png' alt='ga-logo' />
          <h5 className='job-title'>General Assembly</h5>
        </div>
        <h6 className='job-info'>January 2023 - April 2023</h6>
        <p className='job-description'>Software Engineering Immersive</p>
        <Link className='project-link' to='/projects'>Click here to see projects in more detail.</Link>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://upload.wikimedia.org/wikipedia/sco/thumb/d/d1/University_College_London_logo.svg/2560px-University_College_London_logo.svg.png' alt='ucl-logo' />
          <h5 className='job-title'>Institute of Education, University College London</h5>
        </div>
        <h6 className='job-info'>July 2019 - August 2021</h6>
        <p className='job-description'>Teach First Postgraduate Diploma in Education (Modern Foreign Languages)</p>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://www.logo.wine/a/logo/University_of_Cambridge/University_of_Cambridge-Logo.wine.svg' alt='cambridge-logo' />
          <h5 className='job-title'>Trinity College, University of Cambridge</h5>
        </div>
        <h6 className='job-info'>October 2015 - July 2019</h6>
        <p className='job-description'>BA Hons Modern & Medieval Languages (French & Italian) (of which year abroad spent studying at the Ecole Normale Supérieure de Lyon, in Lyon, France) — Class: 2 Division: i</p>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://www.trinitycollege.com/images/trinity_college_london_logo.png' alt='trinity-college-london-logo' />
          <h5 className='job-title'>Associate of Trinity College London, Diploma in Musical Performance (Harp)</h5>
        </div>
        <h6 className='job-info'>July 2015</h6>
        <p className='job-description'>Diploma awarded for performance on harp, involving c.40 minute recital and performance notes.</p>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://pbs.twimg.com/profile_images/1568155240125399041/lGj9V5De_400x400.jpg' alt='aidans-fishers-logo' />
          <h5 className='job-title'>St Aidans and St John Fisher Associated Sixth Form</h5>
        </div>
        <h6 className='job-info'>September 2013 - July 2015</h6>
        <p className='job-description'>Biology A*, Chemistry A*, French A*, Maths A, EPQ A</p>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kvDkKXOjeIuOV6Gsl8141YKXyQ1RxSXdMz64Qfds4qmuw6vki8StT0ezkaAwgcTlsw&usqp=CAU' alt='aidans-logo' />
          <h5 className='job-title'>St Aidans CofE High School</h5>
        </div>
        <h6 className='job-info'>September 2008 - August 2013</h6>
        <p className='job-description'>GCSEs: 11 subjects (11 A*), FSMQ Further Maths (B), Functional Skills</p>
      </div>
    </>
  )
}

export default Education