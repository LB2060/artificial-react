import React from 'react'
import Button from './Button'

const LearnMore:React.FC= () => {
  return (
    <div className='learn-more'>
        <div className="container">
            <div className="row">
                <div className="learn-left col-12 col-md-6">
                    <img className='w-100' src="/learn-more/brain.svg" alt="" />
                </div>
                <div className="learn-right col-12 col-md-6">
                    <h2 className='learn-h2'>Apply AI, Deep Learning <br />and Data Sciece to solve</h2>
                    <p className='learn-p my-5'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <Button klass='learn-btn' image='' btnText='Learn More'/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default LearnMore