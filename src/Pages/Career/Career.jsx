import React from 'react'
import Card from '../../Card/Card'
import './../Page.css'

const Career = ({data}) => {
  return (
    <>
      <div className="container-fluid allpage">
          <div className="row">
          {
              data.map((item)=>{
                if(item.category==='career')
                return <Card item={item}/>
                return null;
              })
            }
          </div>
      </div>
    </>
  )
}

export default Career