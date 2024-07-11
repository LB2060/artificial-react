import React from 'react'

interface BtnProps{
  btnText:string,
  image:string,
  klass:string,
}

const Button :React.FC<BtnProps> = ({btnText,image,klass}) => {
  return (
    <div>
        <button className={klass}><img src={image} alt="" className='me-2'/>{btnText}</button>
    </div>
  )
}

export default Button