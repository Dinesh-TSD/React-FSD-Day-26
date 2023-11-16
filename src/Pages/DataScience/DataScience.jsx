import React from 'react'
import Card from '../../Card/Card'
import './../Page.css'

const DataScience = ({data}) => {
  return (
    <>
      <div className="container-fluid allpage">
          <div className="row">
          {
              data.map((item)=>{
                if(item.category==='datascience')
                return <Card item={item}/>
                return null;
              })
            }
          </div>
      </div>
    </>
  )
}

export default DataScience