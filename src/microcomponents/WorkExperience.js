import React from 'react'
// import { Link } from 'react-router-dom'

const WorkExperience = () => {
  return (
    <>
      <h3 className='experience-title'>Experience</h3>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://dypsloom.com/static/65bcbe4720879f722b2c015792797884/ccee7/dypsloom-logo-color-stroke.png' alt='dypsloom-logo' />
          <h5 className='job-title'>Assistant Software Enginner at Dypsloom</h5>
        </div>
        <h6 className='job-info'>April 2023 - Present</h6>
        <p className='job-description'>Assisting with Search Engine Optimisation prior to Dypsloom launching their latest game! Also ensuring that the website is mobile-responsive.</p>
      </div>
      {/* <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png' alt='GA-logo' />
          <h5 className='job-title'>Student, Software Engineering Immersive with General Assembly</h5>
        </div>
        <h6 className='job-info'>January 2023 - April 2023</h6>
        <p className='job-description'>Full-time virtual course in software engineering, full-stack. All technologies above covered, alongside daily stand-ups, agile and collaborative working.</p>
        <Link className='project-link' to='/projects'>Click here to see projects in more detail.</Link>
      </div> */}
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://companieslogo.com/img/orig/PSO-90111d90.png?t=1598226939' alt='pearson-logo' />
          <h5 className='job-title'>Associate Examiner for Pearson</h5>
        </div>
        <h6 className='job-info'>May 2023 - Present</h6>
        <p className='job-description'>Analyse papers according to mark scheme, efficiently manage time to keep to schedule.</p>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://goldencircletutors.co.uk/wp-content/themes/the-golden-circle/assets/images/the-golden-circle-logo.png' alt='golden-circle-logo' />
          <h5 className='job-title'>Specialist French Tutor for the Golden Circle</h5>
        </div>
        <h6 className='job-info'>June 2022 - Present</h6>
        <p className='job-description'>Assess student understanding, plan appropriately challenging lessons, deliver lessons in an engaging way.</p>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://pbs.twimg.com/profile_images/615766555532525568/JyZnqXtW_400x400.jpg' alt='harris-bromley-logo' />
          <h5 className='job-title'>Head of Modern Foreign Languages at Harris Girls Academy Bromley</h5>
        </div>
        <h6 className='job-info'>September 2022 - December 2022</h6>
        <p className='job-description'>Responsibility for quality of teaching and delivery of languages lessons across the department, supporting colleagues in MFL department and contributing to their professional development, responsibility for examination results in MFL subjects.</p>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://pbs.twimg.com/profile_images/615766555532525568/JyZnqXtW_400x400.jpg' alt='harris-bromley-logo' />
          <h5 className='job-title'>Second-in-Charge of MFL at Harris Girls Academy Bromley</h5>
        </div>
        <h6 className='job-info'>May 2022 - September 2022</h6>
        <p className='job-description'>Assisting the Head of Department in running the department, supporting continued professional development of colleagues in the department and playing an active role in designing department curriculum.</p>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://pbs.twimg.com/profile_images/615766555532525568/JyZnqXtW_400x400.jpg' alt='harris-bromley-logo' />
          <h5 className='job-title'>Most Able Lead at Harris Girls Academy Bromley</h5>
        </div>
        <h6 className='job-info'>March 2021 - September 2022</h6>
        <p className='job-description'>Running and implementing the school’s support programme for students identified as Higher Prior Achievers, especially those in receipt of Pupil Premium, including educational visits.</p>
      </div>
      <div className='individual-experience'>
        <div className='single-experience'>
          <img className='job-logo' src='https://pbs.twimg.com/profile_images/615766555532525568/JyZnqXtW_400x400.jpg' alt='harris-bromley-logo' />
          <h5 className='job-title'>Teacher of French at Harris Girls Academy Bromley</h5>
        </div>
        <h6 className='job-info'>September 2019 - December 2022</h6>
        <p className='job-description'>Teacher of MFL (French) under the Teach First Programme (2019-2021) then continued as a fully qualified member of staff, consistently graded ‘Outstanding’ in observations.</p>
      </div>
    </>
  )
}

export default WorkExperience