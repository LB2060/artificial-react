import React from 'react'
interface cardprops{
  cardimg:string;
  cardtitle:string;
  cardinfo:string;
}

const Award:React.FC<cardprops>= ({cardimg,cardtitle,cardinfo}) => {
  return (
    <div>
        <div className="card">
  <img src={cardimg} className="card-img-top my-3" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center text-white my-2">{cardtitle}</h5>
    <p className="card-text text-center text-white my-3">{cardinfo}</p>
  </div>
</div>
    </div>
  )
}

export default Award