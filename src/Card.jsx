import React from 'react';


function Card(props){
    // console.log(props)
    return (
        <>
     <div className='cardes'>
      <div className='card'>
        <div className="card-img">
        <img src={props.imgsrc} alt='Images' className='card-image'/>
    
        </div>
        <div className='card-content'>
          <span className='card-net'>{props.title}</span>
          <h3 className='card-heading'>{props.sname}</h3>
          <a href={props.link} className='card-btn'>
            <button>Watch Now</button>
          </a>
        </div>
      </div>
     </div>
    </>
      );
}
export default Card;