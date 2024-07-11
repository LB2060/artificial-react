import React from 'react'

const clients:React.FC= () => {
  return (
    <div className='clients'>
        <div className="container">
            <div className="row">
                <div className="client-left col-12 col-md-6">
                    <h2 className='client-h2 text-white'>What our clients say about our awesome solutions</h2>
                    <p className='client-p text-white'>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
                    <p className='client-p text-white'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
                    <p className='client-p text-white'>Lorem ipsum is placeholder previewing layouts and visual mockups.</p>
                    <p className='client-p text-white'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
                <div className="client-right col-12 col-md-6">
                    <img className='w-100' src="/clienti/tech.svg" alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default clients