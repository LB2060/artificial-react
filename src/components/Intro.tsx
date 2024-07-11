import React from 'react'
import Button from './Button'
import { ReactTyped } from "react-typed";

const intro: React.FC = () => {
  return (
    <div className='intro'>
      <div className='container'>
        <div className="row">
          <div className="intro-left col-12 col-md-6">
            <h6 className='intro-h6 my-3'>NEXT GENERATION PLATFORM</h6>
            <ReactTyped className='intro-h2'
      strings={[
        "Artificial intelligence","Cybersecurity"
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    >
    </ReactTyped>
            <h2 ></h2>
            <p className='intro-p'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <div className='btns'>
              <Button klass="get-started" image='' btnText='Get Started' />
              <Button klass='watch-video' image='/intro/play.svg' btnText='Watch Video' />
            </div>

          </div>
          <div className="intro-right col-12 col-md-6">
            <img className='w-100' src="/intro/person.svg" alt="" />
          </div>
        </div>

      </div>




    </div>
  )
}

export default intro