import React, { Fragment } from 'react'

const Table = ({value,plateCount}) => {

  const balanceLeft = (value<=0)? false:true;
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  const arr = [];
  for (let i=0;i<plateCount;i++){
    arr.push("x");
  }
  return (
    <Fragment>
      { 
      balanceLeft && <h1 className="remaining"> You have: ${value} remaining!</h1>
      }
      {
      !balanceLeft && <h1 className="remaining"> Insufficient Balance!</h1>
      }
      <div className="table">
        <div className="stack">
          {

            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
           balanceLeft && renderPlates(arr)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table