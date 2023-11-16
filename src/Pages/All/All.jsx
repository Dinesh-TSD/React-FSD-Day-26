import React from 'react'
import Card from '../../Card/Card'
import './../Page.css'

const All = ({data}) => {
  return (
    <>
      <div className="container-fluid allpage">
          <div className="row">
            {
              data.map((item)=>{
                return <Card item={item}/>
              })
            }
          </div>
      </div>
    </>
  )
}

export default All