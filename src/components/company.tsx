import React from 'react'
interface compProps{
    compimg:string;
    
}

const company: React.FC<compProps> = ({compimg}) => {
  return (
    <div>
        <img className='comp-img' src={compimg} alt="" />
    </div>
  )
}

export default company