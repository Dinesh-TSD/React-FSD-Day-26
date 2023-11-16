import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  const currentDate = new Date();

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 justfy-content-center">
        <div className="card justfy-content-center">
          <img src={item.img} alt=''/>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <Link id='read' to={'/readmore'}>READ MORE...</Link>
            </div>
            <div className='card-footer py-3 px-4'>
                {
                    `${currentDate.getDate()} ${currentDate.toLocaleString('en-us', { month: 'long' })} ${currentDate.getFullYear()}`
                }
                <span> : No Comments</span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card