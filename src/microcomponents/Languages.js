import React from 'react'

const Languages = () => {
  return (
    <>
      <div className='individual-language-skill'>
        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png' alt='UK flag' className='language-icon' />
        <p className='languages-label'>English - Native</p>
      </div>
      <div className='individual-language-skill'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Flag_of_France_%28lighter_variant%29.svg/250px-Flag_of_France_%28lighter_variant%29.svg.png' alt='French flag' className='language-icon' />
        <p className='languages-label'>French - Fluent</p>
      </div>
      <div className='individual-language-skill'>
        <img src='https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg' alt='Italian flag' className='language-icon' />
        <p className='languages-label'>Italian - Intermediate</p>
      </div>
      <div className='individual-language-skill'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png' alt='Spanish flag' className='language-icon' />
        <p className='languages-label'>Spanish - Beginner</p>
      </div>
      <div className='individual-language-skill'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Kerala.png' alt='Kerala flag' className='language-icon' />
        <p className='languages-label'>Malayalam - Beginner</p>
      </div>
    </>
  )
}

export default Languages